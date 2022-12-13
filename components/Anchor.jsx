import { useRouter } from "next/router";

export default function Anchor({ children, href, className, id }) {
  const router = useRouter();

  function handleClick(e) {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a id={id} className={className} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
