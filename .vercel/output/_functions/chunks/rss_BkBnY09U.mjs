import { g as getCollection, a as getSite } from './consts_BTEIQhKL.mjs';
import rss from '@astrojs/rss';

async function GET(context) {
	const posts = await getCollection('blog');
	const site = await getSite();
	return rss({
		title: site.author.name,
		description: site.author.role,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
