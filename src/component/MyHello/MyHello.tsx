type MyHelloProps = {
  myName: string;
};

export default function MyHello(props: MyHelloProps) {
  return <div>こんにちは、{props.myName}さん！</div>;
}
