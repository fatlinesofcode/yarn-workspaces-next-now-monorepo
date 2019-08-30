import Bar from 'shared/Bar'
import Link from "next/link";

export default () => (
  <div>
    Imported modules from another workspace:
    <Bar />
    <div>
      <Link href={'/about'}>
        <a>about</a>
      </Link>
    </div>
  </div>
)
