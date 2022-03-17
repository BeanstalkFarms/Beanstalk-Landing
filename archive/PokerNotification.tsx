import Link from 'next/link';

export default () => (
  <div>
    <span className={
      `sm:text-5xl text-7xl float-left mr-2
      sm:ml-0 -ml-2.5` // on mobile, line things up with the button
    }>🃏</span>
    <span className="text-gray-700 text-sm">
      600,000 Pods up for grabs in Beans on the Table, a poker tournament hosted by Bean Sprout. <Link href="/poker"><a className="text-blue-500 font-bold">Learn more &rarr;</a></Link>
    </span>
  </div>
)