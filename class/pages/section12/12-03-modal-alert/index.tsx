import { Modal } from 'antd';

export default function ModalAlertPage(): JSX.Element {
  const success = (): void => {
    Modal.success({
      content: '게시글 등록에 성공했습니다.',
    });
  };

  const error = (): void => {
    Modal.error({
      content: '비밀번호가 틀렸습니다!',
    });
  };


  return <>
    <button onClick={success}>성공</button>
    <button onClick={error}>실패</button>
  </>
}
