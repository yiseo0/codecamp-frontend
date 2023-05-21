import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
   "/section12/12-02-library-star",
]

interface ILayoutProps {
   children: JSX.Element
}

export default function Layout(props: ILayoutProps): JSX.Element {
   const router = useRouter()

   const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath)

   return (
      <>
         {!isHiddenHeader && <LayoutHeader />}
         <LayoutBanner />
         <LayoutNavigation />
         <div style={{ display: "flex" }}>
            <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
            <div style={{ height: "300px" }}>{props.children}</div>
         </div>
         <LayoutFooter />
      </>
   );
}