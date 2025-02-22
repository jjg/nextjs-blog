import Link from 'next/link'
import Date from '../components/date'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {

  console.log('Running Home');

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>One man skunkworks</p>
      </section>
      <section className={'${utilStyles.headingMd} ${utilStyles.padding1ps}'}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
			<li className={utilStyles.listItem} key={id}>
			  <Link href={`/posts/${id}`}>
				<a>{title}</a>
			  </Link>
			  <br />
			  <small className={utilStyles.lightText}>
				<Date dateString={date} />
			  </small>
			</li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

