import Link from "next/link";
import LazyImage from "shared/LazyImage";

export default () => (
  <div>
    About page
    <LazyImage/>
    <div>
      <Link href={'/'}>
        <a>home</a>
      </Link>
    </div>
  </div>
)
