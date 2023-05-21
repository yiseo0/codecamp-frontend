interface IProps {
   children: JSX.Element
}
export default function Layout(props: IProps): JSX.Element {
   return (
      <>
         <div>{props.children}</div>
      </>
   );
}