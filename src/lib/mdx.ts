import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const newsDir = path.join(process.cwd(), 'src/content/news');

export type Post = {
    slug: string;
    title: string;
    date: string;
    content: string;
    locale: string;
    cover?: string;
};

export async function getPosts(locale: string): Promise<Post[]> {
    if (!fs.existsSync(newsDir)) return [];
    
    const files = fs.readdirSync(newsDir);
    const posts = files
        .filter(file => file.endsWith(`.${locale}.mdx`))
        .map(file => {
            const filePath = path.join(newsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            const slug = file.replace(`.${locale}.mdx`, '');
            
            return {
                slug,
                title: data.title,
                date: data.date,
                cover: data.cover,
                content,
                locale
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
    return posts;
}

export async function getPost(slug: string, locale: string): Promise<Post | null> {
    const filename = `${slug}.${locale}.mdx`;
    const filePath = path.join(newsDir, filename);
    
    if (!fs.existsSync(filePath)) return null;
    
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    return {
        slug,
        title: data.title,
        date: data.date,
        cover: data.cover,
        content,
        locale
    };
}

