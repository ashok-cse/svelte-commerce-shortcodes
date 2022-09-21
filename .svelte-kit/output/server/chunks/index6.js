import { c as create_ssr_component, j as add_attribute, d as escape, v as validate_component } from "./index.js";
import { W as WWW_URL, a as authorInfo } from "./index5.js";
import dayjs from "dayjs";
import hash from "hash-it";
import { s as siteLanguage, f as siteTitle, o as ogLanguage, g as entity, h as siteShortTitle } from "./website.js";
const OpenGraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { datePublished } = $$props;
  let { lastUpdated } = $$props;
  let { facebookAuthorPage = "" } = $$props;
  let { facebookPage = "" } = $$props;
  let { image } = $$props;
  let { squareImage } = $$props;
  let { description } = $$props;
  let { ogLanguage: ogLanguage2 } = $$props;
  let { pageTitle } = $$props;
  let { siteTitle: siteTitle2 } = $$props;
  let { url } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.facebookAuthorPage === void 0 && $$bindings.facebookAuthorPage && facebookAuthorPage !== void 0)
    $$bindings.facebookAuthorPage(facebookAuthorPage);
  if ($$props.facebookPage === void 0 && $$bindings.facebookPage && facebookPage !== void 0)
    $$bindings.facebookPage(facebookPage);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.squareImage === void 0 && $$bindings.squareImage && squareImage !== void 0)
    $$bindings.squareImage(squareImage);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.ogLanguage === void 0 && $$bindings.ogLanguage && ogLanguage2 !== void 0)
    $$bindings.ogLanguage(ogLanguage2);
  if ($$props.pageTitle === void 0 && $$bindings.pageTitle && pageTitle !== void 0)
    $$bindings.pageTitle(pageTitle);
  if ($$props.siteTitle === void 0 && $$bindings.siteTitle && siteTitle2 !== void 0)
    $$bindings.siteTitle(siteTitle2);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `${$$result.head += `<meta property="${"og:site_name"}"${add_attribute("content", siteTitle2, 0)} data-svelte="svelte-rzh8wj"><meta property="${"og:locale"}"${add_attribute("content", ogLanguage2, 0)} data-svelte="svelte-rzh8wj"><meta property="${"og:url"}"${add_attribute("content", url, 0)} data-svelte="svelte-rzh8wj"><meta property="${"og:type"}"${add_attribute("content", article ? "article" : "website", 0)} data-svelte="svelte-rzh8wj"><meta property="${"og:title"}"${add_attribute("content", pageTitle, 0)} data-svelte="svelte-rzh8wj"><meta property="${"og:description"}"${add_attribute("content", description, 0)} data-svelte="svelte-rzh8wj">${image ? `<meta property="${"og:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:width"}" content="${"1200"}" data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:height"}" content="${"627"}" data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-rzh8wj">` : ``}${squareImage ? `<meta property="${"og:image"}"${add_attribute("content", squareImage.url, 0)} data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:width"}" content="${"400"}" data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:height"}" content="${"400"}" data-svelte="svelte-rzh8wj">
    <meta property="${"og:image:alt"}"${add_attribute("content", image.alt, 0)} data-svelte="svelte-rzh8wj">` : ``}${article ? `<meta property="${"article:publisher"}"${add_attribute("content", facebookPage, 0)} data-svelte="svelte-rzh8wj">
    <meta property="${"article:author"}"${add_attribute("content", facebookAuthorPage, 0)} data-svelte="svelte-rzh8wj">
    <meta property="${"article:published_time"}"${add_attribute("content", datePublished, 0)} data-svelte="svelte-rzh8wj">
    <meta property="${"article:modified_time"}"${add_attribute("content", lastUpdated, 0)} data-svelte="svelte-rzh8wj">` : ``}`, ""}`;
});
const SchemaOrg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { author = null } = $$props;
  let { breadcrumbs = [] } = $$props;
  let { datePublished = null } = $$props;
  let { entity: entity2 = null } = $$props;
  let { lastUpdated = null } = $$props;
  let { featuredImage = null } = $$props;
  let { metadescription = "" } = $$props;
  let { siteLanguage: siteLanguage2 = null } = $$props;
  let { siteTitle: siteTitle2 = "" } = $$props;
  let { siteTitleAlt = "" } = $$props;
  let { siteUrl = WWW_URL } = $$props;
  let { title = "" } = $$props;
  let { url = WWW_URL } = $$props;
  let { facebookPage = null } = $$props;
  let { githubPage = null } = $$props;
  let { linkedinProfile = null } = $$props;
  let { telegramUsername = null } = $$props;
  let { twitterUsername = null } = $$props;
  let { name = null } = $$props;
  let { description = null } = $$props;
  let { sku = null } = $$props;
  let { price = 1 } = $$props;
  let { image = null } = $$props;
  let { gtin = null } = $$props;
  let { brand = "Litekart" } = $$props;
  let { ratingCount = 1 } = $$props;
  let { ratingValue = 5 } = $$props;
  let { createdAt = null } = $$props;
  let { updatedAt = null } = $$props;
  let { slug = null } = $$props;
  let { id = null } = $$props;
  let { popularity = 1e3 } = $$props;
  let { entityMeta = null } = $$props;
  const nextWeek = dayjs().add(7, "day");
  const entityHash = hash({ author }, { algorithm: "md5" });
  const schemaOrgEntity = entityMeta !== null ? {
    "@type": ["Person", "Organization"],
    "@id": `${siteUrl}/#/schema/person/${entityHash}`,
    name: author,
    image: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage2,
      url: entityMeta == null ? void 0 : entityMeta.url,
      width: entityMeta == null ? void 0 : entityMeta.faviconWidth,
      height: entityMeta == null ? void 0 : entityMeta.faviconHeight,
      caption: author
    },
    logo: { "@id": `${siteUrl}/#personlogo` },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
      `https://t.me/${telegramUsername}`,
      `https://linkedin.com/in/${linkedinProfile}`,
      facebookPage
    ]
  } : null;
  const schemaOrgWebsite = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteTitle2,
    description: siteTitleAlt,
    publisher: {
      "@id": `${siteUrl}/#/schema/person/${entityHash}`
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    ],
    inLanguage: siteLanguage2
  };
  const schemaOrgImageObject = {
    "@type": "ImageObject",
    "@id": `${url}#primaryimage`,
    inLanguage: siteLanguage2,
    url: featuredImage == null ? void 0 : featuredImage.url,
    contentUrl: featuredImage == null ? void 0 : featuredImage.url,
    width: featuredImage == null ? void 0 : featuredImage.width,
    height: featuredImage == null ? void 0 : featuredImage.height,
    caption: featuredImage == null ? void 0 : featuredImage.caption
  };
  const schemaOrgBreadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: breadcrumbs.map((element, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": `${siteUrl}/${element.slug}`,
        url: `${siteUrl}/${element.slug}`,
        name: element.name
      }
    }))
  };
  const schemaOrgWebPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: { "@id": `${siteUrl}/#website` },
    primaryImageOfPage: { "@id": `${url}#primaryimage` },
    datePublished,
    dateModified: lastUpdated,
    author: {
      "@id": `${siteUrl}/#/schema/person/${entityHash}`
    },
    description: metadescription,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: siteLanguage2,
    potentialAction: [{ "@type": "ReadAction", target: [url] }]
  };
  const schemaOrgPublisher = {
    "@type": ["Person", "Organization"],
    "@id": `${siteUrl}/#/schema/person/${entityHash}`,
    name: entity2,
    image: {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage2,
      url: `${siteUrl}/assets/logo.png`,
      contentUrl: `${siteUrl}/assets/logo.png`,
      width: 512,
      height: 512,
      caption: entity2
    },
    logo: { "@id": `${siteUrl}/#personlogo` },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
      `https://t.me/${telegramUsername}`,
      `https://linkedin.com/in/${linkedinProfile}`,
      facebookPage
    ]
  };
  const schemaOrgProduct = {
    "@context": "http://schema.org/",
    "@type": "Product",
    name,
    description,
    sku,
    image,
    gtin,
    brand,
    aggregateRating: {
      "@type": "AggregateRating",
      worstRating: 1,
      bestRating: 5,
      ratingCount,
      ratingValue
    },
    releaseDate: createdAt,
    dateModified: updatedAt,
    url: `${WWW_URL}/biz/${slug}`,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "http://schema.org/DownloadAction",
      userInteractionCount: popularity + 1e3
    },
    offers: {
      "@type": "Offer",
      availability: "http://schema.org/InStock",
      priceValidUntil: nextWeek.toISOString(),
      url: `${WWW_URL}/biz/${slug}`,
      price: price < 1 ? "0.00" : price,
      priceCurrency: "USD",
      seller: {
        "@type": "Organization",
        name: "Litekart",
        url: WWW_URL
      }
    }
  };
  const schemaOrgArray = [
    schemaOrgEntity,
    schemaOrgWebsite,
    schemaOrgImageObject,
    schemaOrgWebPage,
    schemaOrgBreadcrumbList,
    schemaOrgPublisher,
    schemaOrgProduct
  ];
  const schemaOrgObject = {
    "@context": "https://schema.org",
    "@graph": schemaOrgArray
  };
  let jsonLdString = JSON.stringify(schemaOrgObject);
  let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${"<"}/script>
	`;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.breadcrumbs === void 0 && $$bindings.breadcrumbs && breadcrumbs !== void 0)
    $$bindings.breadcrumbs(breadcrumbs);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.entity === void 0 && $$bindings.entity && entity2 !== void 0)
    $$bindings.entity(entity2);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.featuredImage === void 0 && $$bindings.featuredImage && featuredImage !== void 0)
    $$bindings.featuredImage(featuredImage);
  if ($$props.metadescription === void 0 && $$bindings.metadescription && metadescription !== void 0)
    $$bindings.metadescription(metadescription);
  if ($$props.siteLanguage === void 0 && $$bindings.siteLanguage && siteLanguage2 !== void 0)
    $$bindings.siteLanguage(siteLanguage2);
  if ($$props.siteTitle === void 0 && $$bindings.siteTitle && siteTitle2 !== void 0)
    $$bindings.siteTitle(siteTitle2);
  if ($$props.siteTitleAlt === void 0 && $$bindings.siteTitleAlt && siteTitleAlt !== void 0)
    $$bindings.siteTitleAlt(siteTitleAlt);
  if ($$props.siteUrl === void 0 && $$bindings.siteUrl && siteUrl !== void 0)
    $$bindings.siteUrl(siteUrl);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.facebookPage === void 0 && $$bindings.facebookPage && facebookPage !== void 0)
    $$bindings.facebookPage(facebookPage);
  if ($$props.githubPage === void 0 && $$bindings.githubPage && githubPage !== void 0)
    $$bindings.githubPage(githubPage);
  if ($$props.linkedinProfile === void 0 && $$bindings.linkedinProfile && linkedinProfile !== void 0)
    $$bindings.linkedinProfile(linkedinProfile);
  if ($$props.telegramUsername === void 0 && $$bindings.telegramUsername && telegramUsername !== void 0)
    $$bindings.telegramUsername(telegramUsername);
  if ($$props.twitterUsername === void 0 && $$bindings.twitterUsername && twitterUsername !== void 0)
    $$bindings.twitterUsername(twitterUsername);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.sku === void 0 && $$bindings.sku && sku !== void 0)
    $$bindings.sku(sku);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.gtin === void 0 && $$bindings.gtin && gtin !== void 0)
    $$bindings.gtin(gtin);
  if ($$props.brand === void 0 && $$bindings.brand && brand !== void 0)
    $$bindings.brand(brand);
  if ($$props.ratingCount === void 0 && $$bindings.ratingCount && ratingCount !== void 0)
    $$bindings.ratingCount(ratingCount);
  if ($$props.ratingValue === void 0 && $$bindings.ratingValue && ratingValue !== void 0)
    $$bindings.ratingValue(ratingValue);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.updatedAt === void 0 && $$bindings.updatedAt && updatedAt !== void 0)
    $$bindings.updatedAt(updatedAt);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.popularity === void 0 && $$bindings.popularity && popularity !== void 0)
    $$bindings.popularity(popularity);
  if ($$props.entityMeta === void 0 && $$bindings.entityMeta && entityMeta !== void 0)
    $$bindings.entityMeta(entityMeta);
  return `${$$result.head += `<!-- HTML_TAG_START -->${jsonLdScript}<!-- HTML_TAG_END -->`, ""}`;
});
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article = false } = $$props;
  let { author } = $$props;
  let { twitterUsername } = $$props;
  let { image } = $$props;
  let { timeToRead = 0 } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.author === void 0 && $$bindings.author && author !== void 0)
    $$bindings.author(author);
  if ($$props.twitterUsername === void 0 && $$bindings.twitterUsername && twitterUsername !== void 0)
    $$bindings.twitterUsername(twitterUsername);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.timeToRead === void 0 && $$bindings.timeToRead && timeToRead !== void 0)
    $$bindings.timeToRead(timeToRead);
  return `${$$result.head += `<meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1rtavhb">${image ? `<meta name="${"twitter:image"}"${add_attribute("content", image.url, 0)} data-svelte="svelte-1rtavhb">` : ``}${twitterUsername ? `<meta name="${"twitter:creator"}"${add_attribute("content", `@${twitterUsername}`, 0)} data-svelte="svelte-1rtavhb">
    <meta name="${"twitter:site"}"${add_attribute("content", `@${twitterUsername}`, 0)} data-svelte="svelte-1rtavhb">` : ``}<meta name="${"twitter:label1"}" content="${"Written by"}" data-svelte="svelte-1rtavhb"><meta name="${"twitter:data1"}"${add_attribute("content", author, 0)} data-svelte="svelte-1rtavhb">${article && timeToRead > 0 ? `<meta name="${"twitter:label2"}" content="${"Est. reading time"}" data-svelte="svelte-1rtavhb">
    <meta name="${"twitter:data2"}"${add_attribute("content", timeToRead !== 1 ? `${timeToRead} minutes` : "1 minute", 0)} data-svelte="svelte-1rtavhb">` : ``}`, ""}`;
});
const defaultAlt = "";
const SEO = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { author, facebookAuthorPage, facebookPageName, githubPage, linkedinProfile, telegramUsername, twitterUsername } = authorInfo;
  let { article = false } = $$props;
  let { breadcrumbs = [] } = $$props;
  let { entityMeta = null } = $$props;
  let { lastUpdated = null } = $$props;
  let { datePublished = null } = $$props;
  let { description = "" } = $$props;
  let { slug = "" } = $$props;
  let { timeToRead = 0 } = $$props;
  let { title = "" } = $$props;
  let { keywords = "" } = $$props;
  let { featuredImage = {
    url: "",
    alt: defaultAlt,
    width: 672,
    height: 448,
    caption: "Home page"
  } } = $$props;
  let { ogImage = { url: "", alt: defaultAlt } } = $$props;
  let { ogSquareImage = { url: "", alt: defaultAlt } } = $$props;
  let { twitterImage = { url: "", alt: defaultAlt } } = $$props;
  const url = `${WWW_URL}/${slug}`;
  const pageTitle = `${title} ${siteTitle}`;
  const openGraphProps = {
    article,
    datePublished,
    lastUpdated,
    image: ogImage,
    squareImage: ogSquareImage,
    description,
    ogLanguage,
    pageTitle,
    siteTitle,
    url,
    ...article ? {
      datePublished,
      lastUpdated,
      facebookPageName,
      facebookAuthorPage
    } : {}
  };
  const schemaOrgProps = {
    article,
    author,
    breadcrumbs,
    datePublished,
    entity,
    lastUpdated,
    entityMeta,
    featuredImage,
    description,
    siteLanguage,
    siteTitle,
    siteTitleAlt: siteShortTitle,
    siteUrl: WWW_URL,
    title: pageTitle,
    url,
    facebookPageName,
    githubPage,
    linkedinProfile,
    telegramUsername,
    twitterUsername
  };
  const twitterProps = {
    article,
    author,
    twitterUsername,
    image: twitterImage,
    timeToRead
  };
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.breadcrumbs === void 0 && $$bindings.breadcrumbs && breadcrumbs !== void 0)
    $$bindings.breadcrumbs(breadcrumbs);
  if ($$props.entityMeta === void 0 && $$bindings.entityMeta && entityMeta !== void 0)
    $$bindings.entityMeta(entityMeta);
  if ($$props.lastUpdated === void 0 && $$bindings.lastUpdated && lastUpdated !== void 0)
    $$bindings.lastUpdated(lastUpdated);
  if ($$props.datePublished === void 0 && $$bindings.datePublished && datePublished !== void 0)
    $$bindings.datePublished(datePublished);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.timeToRead === void 0 && $$bindings.timeToRead && timeToRead !== void 0)
    $$bindings.timeToRead(timeToRead);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.featuredImage === void 0 && $$bindings.featuredImage && featuredImage !== void 0)
    $$bindings.featuredImage(featuredImage);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0)
    $$bindings.ogImage(ogImage);
  if ($$props.ogSquareImage === void 0 && $$bindings.ogSquareImage && ogSquareImage !== void 0)
    $$bindings.ogSquareImage(ogSquareImage);
  if ($$props.twitterImage === void 0 && $$bindings.twitterImage && twitterImage !== void 0)
    $$bindings.twitterImage(twitterImage);
  return `${$$result.head += `${$$result.title = `<title>${escape(pageTitle)}</title>`, ""}<meta name="${"description"}"${add_attribute("content", description, 0)} data-svelte="svelte-18sn81j"><meta name="${"keywords"}"${add_attribute("content", keywords, 0)} data-svelte="svelte-18sn81j"><meta name="${"robots"}" content="${"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}" data-svelte="svelte-18sn81j"><html${add_attribute("lang", siteLanguage, 0)} data-svelte="svelte-18sn81j"></html>`, ""}
${validate_component(Twitter, "Twitter").$$render($$result, Object.assign(twitterProps), {}, {})}
${validate_component(OpenGraph, "OpenGraph").$$render($$result, Object.assign(openGraphProps), {}, {})}
${validate_component(SchemaOrg, "SchemaOrg").$$render($$result, Object.assign(schemaOrgProps), {}, {})}`;
});
export {
  SEO as S
};
