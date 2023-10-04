type EventBasicProps = {
  type: "date" | "time";
};

export default function EventBasic({ type }: EventBasicProps) {
  const current = () => {
    const d = new Date();
    switch (type) {
      case "date":
        console.log(d.toLocaleDateString());
        break;
      case "time":
        console.log(d.toLocaleTimeString());
        break;
    }
  };
  return (
    <div>
      <button onClick={current}>現在時刻を取得</button>
    </div>
  );
}
