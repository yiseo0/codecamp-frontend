export default function CheckBox() {
   const qqq2 = (e) => {
      e.stopPropagation()
      alert("2번 클릭");
   }

   const qqq3 = (e) => {
      e.stopPropagation()
      alert("3번 클릭");
    }

   return (
      <div onClick={qqq2}>
         <input type="checkbox" onClick={qqq3} />
      </div>
   );
}