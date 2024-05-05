// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = ArticleTextSliceSlice;

/**
 * Content for article documents
 */
interface ArticleDocumentData {
  /**
   * articlePublishDate field in *article*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: article.articlepublishdate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  articlepublishdate: prismic.DateField;

  /**
   * articleTitle field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.articletitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  articletitle: prismic.KeyTextField;

  /**
   * articleImage field in *article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.articleimage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  articleimage: prismic.ImageField<"small">;

  /**
   * articleExcerpt field in *article*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.articleexcerpt
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articleexcerpt: prismic.RichTextField;

  /**
   * Slice Zone field in *article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Description field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for blog documents
 */
interface BlogDocumentData {
  /**
   * blogTitle field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.blogTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blogTitle: prismic.KeyTextField;

  /**
   * blogDescription field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.blogDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  blogDescription: prismic.KeyTextField;

  /**
   * Slice Zone field in *blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Description field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>;

type FooterDocumentDataSlicesSlice = FooterListBlockSlice;

/**
 * Content for footer documents
 */
interface FooterDocumentData {
  /**
   * EndTitleText field in *footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.endtitletext
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  endtitletext: prismic.KeyTextField;

  /**
   * endTextDisclaimer field in *footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.endtextdisclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  endtextdisclaimer: prismic.KeyTextField;

  /**
   * Slice Zone field in *footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice>;
}

/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *header → navigation*
 */
export interface HeaderDocumentDataNavigationItem {
  /**
   * link field in *header → navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *header → navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for header documents
 */
interface HeaderDocumentData {
  /**
   * logo field in *header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * navigation field in *header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<HeaderDocumentDataNavigationItem>>;
}

/**
 * header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

/**
 * Item in *home → bannerData*
 */
export interface HomeDocumentDataBannerdataItem {
  /**
   * bannerVisiable field in *home → bannerData*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: home.bannerdata[].bannerVisiable
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  bannerVisiable: prismic.BooleanField;

  /**
   * bannerheader field in *home → bannerData*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bannerdata[].bannerHeader
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bannerHeader: prismic.KeyTextField;

  /**
   * bannerParagraph field in *home → bannerData*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bannerdata[].bannerBaragraph
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bannerBaragraph: prismic.KeyTextField;

  /**
   * bannerimage field in *home → bannerData*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bannerdata[].bannerImage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bannerImage: prismic.ImageField<never>;
}

type HomeDocumentDataSlicesSlice =
  | TabsSectionSlice
  | CallToActionEmailSlice
  | SectionProvidedServicesHomeSlice
  | SectionTwoBlockHomeSlice
  | SectionBlockHomeSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * bannerData field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.bannerdata[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  bannerdata: prismic.GroupField<Simplify<HomeDocumentDataBannerdataItem>>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes =
  | ArticleDocument
  | BlogDocument
  | FooterDocument
  | HeaderDocument
  | HomeDocument;

/**
 * Primary content in *ArticleTextSlice → Primary*
 */
export interface ArticleTextSliceSliceDefaultPrimary {
  /**
   * articleText field in *ArticleTextSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article_text_slice.primary.articletext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articletext: prismic.RichTextField;
}

/**
 * Primary content in *ArticleTextSlice → Items*
 */
export interface ArticleTextSliceSliceDefaultItem {
  /**
   * articleTableofContent field in *ArticleTextSlice → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: article_text_slice.items[].articletableofcontent
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  articletableofcontent: prismic.ContentRelationshipField<"article">;
}

/**
 * Default variation for ArticleTextSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleTextSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleTextSliceSliceDefaultPrimary>,
  Simplify<ArticleTextSliceSliceDefaultItem>
>;

/**
 * Slice variation for *ArticleTextSlice*
 */
type ArticleTextSliceSliceVariation = ArticleTextSliceSliceDefault;

/**
 * ArticleTextSlice Shared Slice
 *
 * - **API ID**: `article_text_slice`
 * - **Description**: ArticleTextSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleTextSliceSlice = prismic.SharedSlice<
  "article_text_slice",
  ArticleTextSliceSliceVariation
>;

/**
 * Primary content in *CallToActionEmail → Primary*
 */
export interface CallToActionEmailSliceDefaultPrimary {
  /**
   * Headercalltoaction field in *CallToActionEmail → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_email.primary.headercalltoaction
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headercalltoaction: prismic.KeyTextField;

  /**
   * Paragraphcalltoaction field in *CallToActionEmail → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_email.primary.paragraphcalltoaction
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  paragraphcalltoaction: prismic.KeyTextField;

  /**
   * EmailFormPlaceholder field in *CallToActionEmail → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_email.primary.emailformplaceholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  emailformplaceholder: prismic.KeyTextField;

  /**
   * FullNameFormPlaceholder field in *CallToActionEmail → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_email.primary.fullnameformplaceholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  fullnameformplaceholder: prismic.KeyTextField;

  /**
   * ButtonCallToAction field in *CallToActionEmail → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_email.primary.buttoncalltoaction
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttoncalltoaction: prismic.KeyTextField;
}

/**
 * Default variation for CallToActionEmail Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionEmailSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionEmailSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToActionEmail*
 */
type CallToActionEmailSliceVariation = CallToActionEmailSliceDefault;

/**
 * CallToActionEmail Shared Slice
 *
 * - **API ID**: `call_to_action_email`
 * - **Description**: CallToActionEmail
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionEmailSlice = prismic.SharedSlice<
  "call_to_action_email",
  CallToActionEmailSliceVariation
>;

/**
 * Primary content in *FooterListBlock → Primary*
 */
export interface FooterListBlockSliceDefaultPrimary {
  /**
   * footerListTitle field in *FooterListBlock → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_list_block.primary.footerlisttitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footerlisttitle: prismic.KeyTextField;
}

/**
 * Primary content in *FooterListBlock → Items*
 */
export interface FooterListBlockSliceDefaultItem {
  /**
   * linkToPage field in *FooterListBlock → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_list_block.items[].linktopage
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linktopage: prismic.LinkField;

  /**
   * LinkText field in *FooterListBlock → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_list_block.items[].linktext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  linktext: prismic.KeyTextField;
}

/**
 * Default variation for FooterListBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterListBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FooterListBlockSliceDefaultPrimary>,
  Simplify<FooterListBlockSliceDefaultItem>
>;

/**
 * Slice variation for *FooterListBlock*
 */
type FooterListBlockSliceVariation = FooterListBlockSliceDefault;

/**
 * FooterListBlock Shared Slice
 *
 * - **API ID**: `footer_list_block`
 * - **Description**: FooterListBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FooterListBlockSlice = prismic.SharedSlice<
  "footer_list_block",
  FooterListBlockSliceVariation
>;

/**
 * Primary content in *SectionBlockHome → Primary*
 */
export interface SectionBlockHomeSliceDefaultPrimary {
  /**
   * sectionSmallText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionSmallText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionSmallText: prismic.KeyTextField;

  /**
   * sectionHeadingText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionHeadingText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionHeadingText: prismic.KeyTextField;

  /**
   * sectionImage field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sectionimage: prismic.ImageField<never>;

  /**
   * sectionText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionText
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sectionText: prismic.RichTextField;
}

/**
 * SectionBlockText variation for SectionBlockHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionBlockHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionBlockHomeSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *SectionBlockHome → Primary*
 */
export interface SectionBlockHomeSliceReversePrimary {
  /**
   * sectionSmallText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionSmallText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionSmallText: prismic.KeyTextField;

  /**
   * sectionHeadingText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionHeadingText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionHeadingText: prismic.KeyTextField;

  /**
   * sectionImage field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  sectionimage: prismic.ImageField<never>;

  /**
   * sectionText field in *SectionBlockHome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_block_home.primary.sectionText
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  sectionText: prismic.RichTextField;
}

/**
 * reverse variation for SectionBlockHome Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionBlockHomeSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<SectionBlockHomeSliceReversePrimary>,
  never
>;

/**
 * Slice variation for *SectionBlockHome*
 */
type SectionBlockHomeSliceVariation =
  | SectionBlockHomeSliceDefault
  | SectionBlockHomeSliceReverse;

/**
 * SectionBlockHome Shared Slice
 *
 * - **API ID**: `section_block_home`
 * - **Description**: SectionBlockHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionBlockHomeSlice = prismic.SharedSlice<
  "section_block_home",
  SectionBlockHomeSliceVariation
>;

/**
 * Primary content in *SectionProvidedServicesHome → Primary*
 */
export interface SectionProvidedServicesHomeSliceDefaultPrimary {
  /**
   * sectionsmalltext field in *SectionProvidedServicesHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_provided_services_home.primary.sectionsmalltext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionsmalltext: prismic.KeyTextField;

  /**
   * sectionheadingtext field in *SectionProvidedServicesHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_provided_services_home.primary.sectionheadingtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionheadingtext: prismic.KeyTextField;
}

/**
 * Primary content in *SectionProvidedServicesHome → Items*
 */
export interface SectionProvidedServicesHomeSliceDefaultItem {
  /**
   * serviceImage field in *SectionProvidedServicesHome → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_provided_services_home.items[].serviceimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  serviceimage: prismic.ImageField<never>;

  /**
   * serviceDescription field in *SectionProvidedServicesHome → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_provided_services_home.items[].servicedescription
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  servicedescription: prismic.KeyTextField;
}

/**
 * Default variation for SectionProvidedServicesHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionProvidedServicesHomeSliceDefault =
  prismic.SharedSliceVariation<
    "default",
    Simplify<SectionProvidedServicesHomeSliceDefaultPrimary>,
    Simplify<SectionProvidedServicesHomeSliceDefaultItem>
  >;

/**
 * Slice variation for *SectionProvidedServicesHome*
 */
type SectionProvidedServicesHomeSliceVariation =
  SectionProvidedServicesHomeSliceDefault;

/**
 * SectionProvidedServicesHome Shared Slice
 *
 * - **API ID**: `section_provided_services_home`
 * - **Description**: SectionProvidedServicesHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionProvidedServicesHomeSlice = prismic.SharedSlice<
  "section_provided_services_home",
  SectionProvidedServicesHomeSliceVariation
>;

/**
 * Primary content in *SectionTwoBlockHome → Primary*
 */
export interface SectionTwoBlockHomeSliceDefaultPrimary {
  /**
   * sectionSmallText field in *SectionTwoBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_two_block_home.primary.sectionsmalltext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionsmalltext: prismic.KeyTextField;

  /**
   * sectionHeadingText field in *SectionTwoBlockHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_two_block_home.primary.sectionheadingtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  sectionheadingtext: prismic.KeyTextField;
}

/**
 * Primary content in *SectionTwoBlockHome → Items*
 */
export interface SectionTwoBlockHomeSliceDefaultItem {
  /**
   * logo field in *SectionTwoBlockHome → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: section_two_block_home.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * description field in *SectionTwoBlockHome → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_two_block_home.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for SectionTwoBlockHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTwoBlockHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTwoBlockHomeSliceDefaultPrimary>,
  Simplify<SectionTwoBlockHomeSliceDefaultItem>
>;

/**
 * Slice variation for *SectionTwoBlockHome*
 */
type SectionTwoBlockHomeSliceVariation = SectionTwoBlockHomeSliceDefault;

/**
 * SectionTwoBlockHome Shared Slice
 *
 * - **API ID**: `section_two_block_home`
 * - **Description**: SectionTwoBlockHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionTwoBlockHomeSlice = prismic.SharedSlice<
  "section_two_block_home",
  SectionTwoBlockHomeSliceVariation
>;

/**
 * Primary content in *TabsSection → Primary*
 */
export interface TabsSectionSliceDefaultPrimary {
  /**
   * tabsSmallText field in *TabsSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tabs_section.primary.tabssmalltext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tabssmalltext: prismic.KeyTextField;
}

/**
 * Primary content in *TabsSection → Items*
 */
export interface TabsSectionSliceDefaultItem {
  /**
   * TabTitle field in *TabsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tabs_section.items[].tabtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tabtitle: prismic.KeyTextField;

  /**
   * tabslug field in *TabsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tabs_section.items[].tabslug
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tabslug: prismic.KeyTextField;

  /**
   * tabText field in *TabsSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tabs_section.items[].tabtext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tabtext: prismic.RichTextField;
}

/**
 * Default variation for TabsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TabsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TabsSectionSliceDefaultPrimary>,
  Simplify<TabsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *TabsSection*
 */
type TabsSectionSliceVariation = TabsSectionSliceDefault;

/**
 * TabsSection Shared Slice
 *
 * - **API ID**: `tabs_section`
 * - **Description**: TabsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TabsSectionSlice = prismic.SharedSlice<
  "tabs_section",
  TabsSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataSlicesSlice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataNavigationItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataBannerdataItem,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      ArticleTextSliceSlice,
      ArticleTextSliceSliceDefaultPrimary,
      ArticleTextSliceSliceDefaultItem,
      ArticleTextSliceSliceVariation,
      ArticleTextSliceSliceDefault,
      CallToActionEmailSlice,
      CallToActionEmailSliceDefaultPrimary,
      CallToActionEmailSliceVariation,
      CallToActionEmailSliceDefault,
      FooterListBlockSlice,
      FooterListBlockSliceDefaultPrimary,
      FooterListBlockSliceDefaultItem,
      FooterListBlockSliceVariation,
      FooterListBlockSliceDefault,
      SectionBlockHomeSlice,
      SectionBlockHomeSliceDefaultPrimary,
      SectionBlockHomeSliceReversePrimary,
      SectionBlockHomeSliceVariation,
      SectionBlockHomeSliceDefault,
      SectionBlockHomeSliceReverse,
      SectionProvidedServicesHomeSlice,
      SectionProvidedServicesHomeSliceDefaultPrimary,
      SectionProvidedServicesHomeSliceDefaultItem,
      SectionProvidedServicesHomeSliceVariation,
      SectionProvidedServicesHomeSliceDefault,
      SectionTwoBlockHomeSlice,
      SectionTwoBlockHomeSliceDefaultPrimary,
      SectionTwoBlockHomeSliceDefaultItem,
      SectionTwoBlockHomeSliceVariation,
      SectionTwoBlockHomeSliceDefault,
      TabsSectionSlice,
      TabsSectionSliceDefaultPrimary,
      TabsSectionSliceDefaultItem,
      TabsSectionSliceVariation,
      TabsSectionSliceDefault,
    };
  }
}
