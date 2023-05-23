import styles from './Layout.module.css'

interface IProps {
   children: JSX.Element;
}

export default function Layout(props: IProps) {
   return (
      <>
         <div className={styles.header}>헤더 영역</div>
         <div className={styles.banner}>배너 영역</div>
         <div className={styles.nav}>navi 영역</div>
         <div className={styles.box}>
            <div className={styles.side}>사이드바 영역</div>
            <div>{props.children}</div>
         </div>
         <div className={styles.footer}>푸터영역</div>
      </>
   );
}