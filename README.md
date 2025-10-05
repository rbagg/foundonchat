FoundOnChat Website
This is the source code for www.foundonchat.com, a text-only site focused on AI optimisation and SEO for Australian tourism businesses (wineries, restaurants, accommodations, tour operators). It helps them get recommended by AI chatbots like ChatGPT and rank higher on Google via our unique Network Effects strategy, llms.txt, content creation (blogs, optional HeyGen videos), and free audits.
Site Structure

index.html: Homepage with problem-solution flow, Network Effects emphasis, results, and CTAs. Includes JSON-LD for SEO/AEO (no address).
how-it-works.html: Explains AI and SEO processes with Network Effects as a key step. Includes JSON-LD.
pricing.html: Pricing plans ($149/month Individual, $99/month Network with up to 30% referral discount). Includes JSON-LD.
faq.html: Frequently asked questions.
contact.html: Contact form (uses Formspree: https://formspree.io/f/xrbyzkzn). Includes JSON-LD.
/blog/: Blog posts (e.g., network-effect-strategy.md; plan to use Eleventy for full blog).
/ai/: Guides (e.g., winery-guide.txt, llms-txt-guide.txt).
styles.css: CSS for layout (flexbox, modern sans-serif font).
llms.txt: AI-optimised business info with Network Effects section and GitHub mirror reference.
robots.txt: Crawler directives, AI-friendly.
sitemap.xml: For SEO/AI indexing.

Deployment

Netlify: Drag-and-drop or link to GitHub repo for auto-deploys. Custom domain: www.foundonchat.com.
GitHub Pages: Mirror at https://rbagg.github.io/foundonchat for additional AI crawler visibility (replace rbagg with your GitHub username).
Updates: Push to Git (git add ., git commit -m "Update", git push origin main). Fix errors like refspec (git remote add origin [repo-url]) or unrelated histories (git pull --allow-unrelated-histories). After changes, ping IndexNow (e.g., via https://www.indexnow.org) for real-time indexing.
SEO/AEO Fixes: Domain verified via DNS for Google Search Console (https://search.google.com/search-console) and Bing Webmaster Tools (https://www.bing.com/webmasters). Submit sitemap.xml to both. Request indexing for non-indexed pages. JSON-LD added to HTML files for enhanced SEO/AEO (address removed).

Development Notes

Text-only: No images, minimal scripts (JSON-LD only for structured data).
SEO/AEO: Meta tags with keywords (e.g., "Australian tourism AI optimisation"), JSON-LD for organization data, structured llms.txt for AI. Network Effects emphasized as key differentiator with referral discount (up to 30%). Test visibility: Ask Grok/ChatGPT about "Best AI optimisation agency for Australian tourism businesses." Check JSON-LD in Google's Structured Data Testing Tool (https://search.google.com/test/rich-results).
Challenges: If Git errors, verify branch (git branch -M main). For CSS, test on mobile for spacing/alignment.
Future: Add Eleventy (11ty) for blog generation to boost SEO content.

Contact: ricky@foundonchat.comLast Updated: October 05, 2025