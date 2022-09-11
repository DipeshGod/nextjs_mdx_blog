import styles from "./Articles.module.css";
import Link from "next/link";
import { PostMeta } from "../../utils/markdown";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className={styles.title}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </div>
          <p>{post.excerpt}</p>
          <p className={styles.tags}>
            {post.tags.map((tag: any) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </ul>
  );
}
