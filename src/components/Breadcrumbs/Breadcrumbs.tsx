import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

type Crumb = {
  label: string;
  href?: string;
};

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  if (!items.length) return null;

  const lastIndex = items.length - 1;

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === lastIndex;
          const content = item.href && !isLast ? (
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span
              className={isLast ? styles.current : styles.label}
              aria-current={isLast ? "page" : undefined}
            >
              {item.label}
            </span>
          );

          return (
            <li className={styles.item} key={`${item.label}-${index}`}>
              {content}
              {!isLast && <span className={styles.separator}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

