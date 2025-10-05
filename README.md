# FoundOnChat Website

This is the source code for **www.foundonchat.com**, Australia's first tourism AI optimisation agency using a proprietary **three-layer system**: Network Effects, Dual Content Strategy, and Explicit Crawler Direction.

The site is intentionally text-only, proving that AI/SEO rankings don't need fancy visuals—just strategic content architecture.

## 🎯 Our Three-Layer System

**Layer 1: Network Effects** - Connecting businesses with local partners (winery + restaurant + hotel) to create self-reinforcing ecosystems AI prefers to recommend

**Layer 2: Dual Content Strategy** - Public website for humans + `/ai` directory with conversational Q&A for AI systems

**Layer 3: Explicit Crawler Direction** - Enhanced robots.txt, priority sitemaps, and structured data directing AI crawlers to optimized content

## 📁 Site Structure

### Main Pages
- **index.html**: Homepage emphasizing three-layer system with comparison tables, results, regions served, and CTAs. Includes JSON-LD for SEO/AEO.
- **our-methodology.html**: Deep dive into all three layers with technical details, examples, and implementation process.
- **how-it-works.html**: Step-by-step implementation process (Week 1-4 breakdown).
- **pricing.html**: Individual Business ($149/month) and Network Partnership ($99/month with referral discounts up to 30%).
- **faq.html**: Comprehensive FAQ organized around three-layer system.
- **contact.html**: Contact form (Formspree: https://formspree.io/f/xrbyzkzn) with business type dropdown.
- **ai-resources.html**: NEW - Human-readable index linking to all `/ai` files with explanations. Critical for crawler discovery.

### Blog (Eleventy-Powered)
- **/blog/index.njk**: Blog landing page template listing posts dynamically
- **/blog/network-effect-strategy.md**: Layer 1 deep dive
- **/blog/llms-txt-not-enough.md**: Why basic llms.txt fails; three-layer approach explained
- **_includes/blog-layout.njk**: Reusable layout template for all blog posts

### AI Directory (Layer 2: Dual Content Strategy)
The `/ai` directory contains conversational Q&A content specifically formatted for AI consumption:
- **/ai/winery-guide.txt**: Australian winery optimization with Network Effects examples
- **/ai/restaurant-guide.txt**: Restaurant visibility with wine-dining packages
- **/ai/hotel-guide.txt**: Accommodation optimization with stay-explore bundles
- **/ai/tour-operator.txt**: Tour operator strategies with multi-day packages
- **/ai/ai-optimization-faq.txt**: Comprehensive FAQ about three-layer system

These files demonstrate our Dual Content approach: public website for humans, `/ai` content for AI systems.

### Technical Infrastructure (Layer 3: Explicit Crawler Direction)
- **robots.txt**: Enhanced with explicit directives for GPTBot, Claude-Web, PerplexityBot, CCBot - lists each `/ai` file by name
- **sitemap.xml**: Priority weighting (llms.txt = 1.0, `/ai` files = 0.95, regular pages = 0.6-0.9)
- **llms.txt**: AI-optimized roadmap with "AI-Specific Resources" section explicitly directing crawlers to `/ai` directory

### Styling
- **styles.css**: Modern minimalist black-and-white design with Helvetica, left-aligned header/footer with content, horizontal mobile nav (vertical only <480px), code block styling, form styling

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
3. Add redirect in `_redirects`: `/blog.html /blog/ 301`
4. Build command: `npx eleventy`
5. Publish directory: `_site`

### GitHub Pages (Mirror)
- Mirror at https://rbagg.github.io/foundonchat for additional AI crawler visibility
- Update GitHub username in `llms.txt` references

### Post-Deployment
1. **Google Search Console** (https://search.google.com/search-console):
   - Verify domain via DNS
   - Submit `sitemap.xml`
   - Request indexing for new pages (especially `ai-resources.html`, `/ai/*.txt` files)

2. **Bing Webmaster Tools** (https://www.bing.com/webmasters):
   - Verify domain
   - Submit `sitemap.xml`

3. **IndexNow** (https://www.indexnow.org):
   - Ping for real-time indexing after updates
   - Critical for `/ai` directory changes

4. **Test JSON-LD**: https://search.google.com/test/rich-results

## 🎨 Design Philosophy

**Text-Only by Design**: No images, minimal JavaScript (only JSON-LD for structured data). This proves AI/SEO rankings don't need visuals—just strategic content architecture.

**Why This Works**:
- Faster load times (better SEO)
- AI crawlers process text, not images
- Forces focus on content quality over aesthetics
- Mobile-friendly by default
- Accessible to all users

**Color Scheme**: Black text, white background, minimal gray for cards/borders

## 🔍 SEO/AEO Strategy

### Traditional SEO
- Meta tags with keywords (e.g., "three-layer AI optimisation", "Network Effects tourism")
- JSON-LD structured data on all pages
- Internal linking (footer links to ai-resources.html, llms.txt, our-methodology.html)
- Priority sitemap with weighted importance
- Cross-linking between partner businesses (Network Effects Layer 1)

### AI Optimization (AEO)
- **Layer 1 (Network Effects)**: Interconnected businesses signal authority to AI
- **Layer 2 (Dual Content)**: `/ai` directory with conversational Q&A matching how travellers query AI
- **Layer 3 (Explicit Direction)**: Six-way approach to ensure crawler discovery:
  1. Enhanced robots.txt with explicit file listings
  2. High-priority sitemap entries
  3. llms.txt as roadmap
  4. HTML page (ai-resources.html) linking to all `/ai` files
  5. Footer links on every page
  6. Cross-references between `/ai` files

### Testing Visibility
Ask ChatGPT, Claude, or Perplexity:
- "Best AI optimisation agency for Australian tourism businesses"
- "How should a winery optimize for AI recommendations"
- "What is the three-layer AI optimization system"

Your `/ai` files should appear as references in responses.

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

1. **Three-Layer System Marketing**: Every page reinforces Network Effects + Dual Content + Explicit Direction

2. **Demonstrable Dual Content**: `/ai` directory shows our Layer 2 approach in action

3. **Explicit Crawler Direction**: Six different signals ensure AI finds our content (most agencies use 1-2)

4. **Cross-Referencing**: Every `/ai` file links to others, demonstrating Network Effects in practice

5. **Educational Resources**: `ai-resources.html` serves humans AND crawlers

6. **Text-Only Proof**: Shows AI/SEO success doesn't need fancy design

## 📈 Performance Metrics to Track

### AI Visibility
- Mention frequency across ChatGPT, Claude, Perplexity, Grok
- Recommendation quality (positive/neutral/negative context)
- Query coverage (types of questions triggering your business)
- Competitive position vs. other agencies

### Traditional SEO
- Google rankings for target keywords
- Organic traffic from search
- Click-through rates
- Domain authority improvements

### Network Effects
- Cross-referrals between partner businesses
- Collective AI mention rate vs. individual
- Shared content performance

## 🔮 Future Enhancements

- [ ] Add more blog posts (target: 1-2 per month)
- [ ] Create industry-specific case studies
- [ ] Add client testimonials page
- [ ] Develop /ai templates for different business types
- [ ] Create video tutorials explaining three-layer system

## 📞 Contact

**Email**: ricky@foundonchat.com  
**Website**: https://www.foundonchat.com  
**GitHub**: https://github.com/rbagg/foundonchat (update with your username)

---

**Last Updated**: October 05, 2025  
**Version**: 2.0 (Three-Layer System Implementation)