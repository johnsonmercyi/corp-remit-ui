export const Header = (props) => (
    <header>
        {props.children}
    </header>
);

export const Main = (props) => (
    <main className={[...props.style].join(" ")}>
        {props.children}
    </main>
);

export const Footer = (props) => (
    <footer>
        {props.children}
    </footer>
);