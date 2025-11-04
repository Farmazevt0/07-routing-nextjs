import Link from "next/link";
import css from "./Header.module.css";
import TagsMenu from "../TagsMenu/TagsMenu";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/*  Додаємо обов’язкове посилання на /notes/filter/All */}
            <Link href="/notes/filter/All">Notes</Link>
          </li>
          <li>
            <TagsMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;