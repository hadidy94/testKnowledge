import Link from "next/link";
import { useRouter } from "next/router";

function LangLink() {
    const router = useRouter();
    const { locales, locale: activeLocale } = router;

    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale
    );

    return (
        <>
            {otherLocales?.map((locale) => {
                const { pathname, query, asPath } = router;
                return (
                    
                        <Link key={"locale-" + locale} href={{ pathname, query }} as={asPath} locale={locale} legacyBehavior>
                            <a className="knhb-fs-sm">
                                {locale === "en" ? "English" : locale === "ar" ? "عربى" : null}
                            </a>
                        </Link>
                    
                );
            })}
        </>
    );
}

export default LangLink;