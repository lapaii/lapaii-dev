import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import html from 'remark-html'
import { remark } from 'remark'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsData() {
    const filenames = fs.readdirSync(postsDirectory);

    const allPosts = filenames.map((filename) => {
        const id = filename.replace(/\.md$/, '');

        const fullpath = path.join(postsDirectory, filename);
        const filecontents = fs.readFileSync(fullpath, 'utf8');

        const matterResult = matter(filecontents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        }

        return blogPost
    });

    return allPosts.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const fullpath = path.join(postsDirectory, `${id}.md`);
    const filecontents = fs.readFileSync(fullpath, 'utf8');

    const matterResult = matter(filecontents);

    const processedcontent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedcontent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    }

    return blogPostWithHTML
}