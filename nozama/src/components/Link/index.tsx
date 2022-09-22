import NextLink from 'next/link';

interface LinkProps {
    children: string;
    href: string;
}

export default function Link({ children, href, ...props}: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    )
}