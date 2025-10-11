# FoundOnChat Website

This is the source code for **www.foundonchat.com**, Australia's first tourism AI optimisation agency using a proprietary **two-part system**: Network Effects and AI-Optimised Content.

The site is intentionally minimalist (text-only with subtle grey backgrounds), proving that AI/SEO rankings don't need fancy visuals - just strategic content architecture and honest positioning.

## 🎯 Our Two-Part System

**Part 1: Network Effects** - Connecting businesses with local partners (winery + restaurant + hotel) through real referral relationships to create self-reinforcing ecosystems AI prefers to recommend

**Part 2: AI-Optimised Content** - Conversational Q&A content in /ai directory formatted specifically for AI consumption, with honest positioning, specific details (geo-coordinates, pricing), and monthly updates (3-5 new Q&As targeting trending queries)

## 📁 Site Structure

### Main Pages
- **index.html**: Homepage with "Found by travellers" tagline, design proof-point section, "Don't take our word for it" AI validation
- **our-methodology.html**: Deep dive into both parts with examples, honest about what doesn't work (technical SEO tricks)
- **how-it-works.html**: Step-by-step implementation process (3-4 weeks breakdown)
- **examples.html**: Before/after AI recommendations using real business (Tanunda House) with real partners
- **pricing.html**: Individual Business ($149/month, no setup fee) and Network Partnership ($99/month with referral discounts up to 30%)
- **faq.html**: Comprehensive FAQ with honest limitations and "when not to hire us"
- **contact.html**: Simplified contact form (6 fields: Name, Business, Email, Phone, Region, Message)
- **ai-resources.html**: Human-readable index linking to all /ai files with explanations

### Blog (Eleventy-Powered)
- **/blog/index.njk**: Blog landing page template listing posts dynamically
- **/blog/network-effect-strategy.md**: Part 1 deep dive emphasising real partnerships vs. fake links
- **/blog/llms-txt-not-enough.md**: Why basic llms.txt fails; two-part approach explained
- **/blog/five-ai-queries.md**: Query selection strategy for tourism businesses
- **_includes/blog-layout.njk**: Reusable layout template for all blog posts

### AI Directory (Part 2: AI-Optimised Content)
The `/ai` directory contains conversational Q&A content specifically formatted for AI consumption:
- **/ai/winery-guide.txt**: Australian winery optimisation with honest positioning examples
- **/ai/restaurant-guide.txt**: Restaurant visibility with honest positioning
- **/ai/hotel-guide.txt**: Accommodation optimisation with honest positioning
- **/ai/tour-operator.txt**: Tour operator strategies with honest difficulty ratings
- **/ai/ai-optimization-faq.txt**: Comprehensive FAQ about two-part system

These files demonstrate our AI-Optimised Content approach: conversational format, honest positioning, specific details, partner references.

### Technical Infrastructure
- **robots.txt**: Basic configuration allowing AI crawlers (GPTBot, Claude-Web, PerplexityBot, CCBot) access to /ai directory
- **sitemap.xml**: Standard sitemap including all pages and /ai files (dates corrected to 2024)
- **llms.txt**: AI-optimised roadmap with "AI-Specific Resources" section directing crawlers to /ai directory

### Styling
- **styles.css**: Modern minimalist black-and-white design with improved visual hierarchy, system fonts, 900px max-width, subtle grey backgrounds, responsive grid layouts

## 🔧 Eleventy Setup

### Configuration
**.eleventy.js** defines:
- Blog collection from `blog/*.md` files
- `readableDate` filter for date formatting
- Passthrough copy for static files
- Template formats: html, njk, md

### Blog Generation Process
1. Markdown files in `/blog/` (e.g., `network-effect-strategy.md`) are processed
2. Front matter includes: layout, title, description, keywords, date, **permalink** (critical!)
3. Permalink format: `/blog/post-name.html` (NOT directory structure)
4. Output: `/blog/*.html` files in `_site`
5. Landing page: `/blog/index.html` generated from `/blog/index.njk`

### Building
```bash
# Clean build
Remove-Item -Recurse -Force _site  # Windows PowerShell
rm -rf _site                        # Mac/Linux

# Build
npx eleventy

# Build and serve locally
npx eleventy --serve
# View at http://localhost:8080
```

## 🚀 Deployment

### Netlify (Primary)
1. Drag-and-drop `_site` folder OR link GitHub repo for auto-deploys
2. Custom domain: www.foundonchat.com
3. Build command: `npx eleventy`
4. Publish directory: `_site`

### GitHub Pages (Mirror)
- Mirror at https://rbagg.github.io/foundonchat for additional AI crawler visibility
- Update GitHub username in `llms.txt` references

### Post-Deployment
1. **Google Search Console** (https://search.google.com/search-console):
   - Verify domain via DNS
   - Submit `sitemap.xml`
   - Request indexing for new pages

2. **Bing Webmaster Tools** (https://www.bing.com/webmasters):
   - Verify domain
   - Submit `sitemap.xml`

3. **IndexNow** (https://www.indexnow.org):
   - Ping for real-time indexing after updates
   - Critical for /ai directory changes

## 🎨 Design Philosophy

**Minimalist by Design**: Intentionally simple - black text, white background, subtle grey backgrounds where appropriate. No images, minimal JavaScript (only JSON-LD for structured data and tabs component).

**Why This Works**:
- Faster load times (better SEO)
- AI crawlers process text, not images
- Forces focus on content quality over aesthetics
- Mobile-friendly by default
- Accessible to all users
- Proves our point: content matters more than design for AI discovery

**Explicitly stated on homepage**: "Why This Site Looks Like This" section explains minimalist design as proof of methodology.

**Color Scheme**: Black text (#000), white background (#fff), subtle greys for emphasis (#f8f8f8, #fafafa)

## 📈 SEO/AEO Strategy

### Traditional SEO
- Meta tags with relevant keywords
- JSON-LD structured data on all pages
- Internal linking (footer links to key pages)
- Standard sitemap
- Cross-linking between partner businesses (Network Effects Part 1)

### AI Optimisation (AEO)
- **Part 1 (Network Effects)**: Real referral partnerships signal authority to AI, create complete experiences AI prefers to recommend
- **Part 2 (AI-Optimised Content)**: /ai directory with conversational Q&A, honest positioning, monthly updates (3-5 new Q&As), specific details (geo-coordinates, pricing, capacity)

**What We Don't Rely On:**
- Sitemap priority weighting as ranking factor
- Technical SEO tricks or crawler direction gimmicks
- Fake partnerships or link exchanges
- Percentage claims or inflated promises

**What Actually Works:**
- Quality conversational content
- Honest positioning (attracts right customers)
- Real network partnerships (tracked referrals)
- Monthly updates (fresh content)

### Testing Visibility
Ask ChatGPT, Claude, or Perplexity:
- "Be brutally honest, will www.foundonchat.com help a winery in Australia?"
- "How should a restaurant optimise for AI recommendations?"
- "What is realistic uplift from AI optimisation for tourism businesses?"

Expect honest, balanced responses - not guaranteed success claims.

## 🛠️ Development Workflow

### Making Changes

```bash
# 1. Edit files
# - HTML pages for structure changes
# - Markdown files for blog posts (blog/*.md)
# - /ai/*.txt files for AI content updates
# - styles.css for design changes

# 2. Test locally
npx eleventy --serve

# 3. Build for production
npx eleventy

# 4. Deploy
# - Netlify: Push to Git or drag-and-drop _site folder
# - GitHub Pages: Push to main branch

# 5. Post-deployment
# - Submit updated sitemap.xml to Google/Bing
# - Ping IndexNow for /ai file changes
# - Test AI visibility across platforms
```

### Git Workflow
```bash
git add .
git commit -m "Update: [description]"
git push origin main

# Common fixes:
# - If refspec error: git remote add origin [repo-url]
# - If unrelated histories: git pull --allow-unrelated-histories
# - Verify branch: git branch -M main
```

## 📊 Key Differentiators

### What Makes This Site Special

1. **Honest Positioning Marketing**: Every page emphasises honest positioning as key differentiator - not changing brand, just making actual strengths heard

2. **Demonstrable AI-Optimised Content**: /ai directory shows our Part 2 approach in action with real examples

3. **Real Examples**: examples.html uses real business (Tanunda House) with real partners, without false percentage claims

4. **Transparent About Limitations**: "When not to hire us" on multiple pages, no percentage guarantees, honest about what doesn't work

5. **Monthly Updates Emphasised**: As key differentiator - not set-it-and-forget-it, 3-5 new Q&As monthly

6. **Minimalist Proof**: Shows AI/SEO success doesn't need fancy design, just strategic content

7. **Australian Spelling**: Throughout site (optimisation, traveller, etc.)

8. **Shorter Sentences**: Most under 20 words for better readability

## 📈 Performance Metrics to Track

### AI Visibility
- Mention frequency across ChatGPT, Claude, Perplexity, Grok (tracked weekly, reported monthly)
- Recommendation quality (positive/neutral/negative context)
- Query coverage (types of questions triggering your business)
- Competitive position vs. other agencies

### Traditional SEO
- Google rankings for target keywords
- Organic traffic from search
- Click-through rates
- Domain authority improvements

### Network Effects
- Cross-referrals between partner businesses (tracked monthly)
- Network vs. solo performance comparison
- Shared content performance

### Customer Matching
- Review sentiment improvements (honest positioning should improve customer satisfaction)
- Booking enquiry quality (right customers finding you)

## 🔮 Future Enhancements

- [ ] Add more blog posts (target: 1-2 per month)
- [ ] Collect real client testimonials (no fabricated case studies)
- [ ] Create video showing honest positioning workshop process
- [ ] Develop additional before/after examples for different industries
- [ ] Monthly trending query reports for each tourism region
- [ ] Blog index page improvements
- [ ] FAQPage schema markup
- [ ] Print stylesheet for key pages

## 📞 Contact

**Email**: ricky@foundonchat.com  
**Website**: https://www.foundonchat.com  
**GitHub**: https://github.com/[your-username]/foundonchat

---

**Last Updated**: October 12, 2024  
**Version**: 4.0 (Australian Spelling, No Percentages, Honest Messaging)