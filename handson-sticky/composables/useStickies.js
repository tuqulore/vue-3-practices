export default () => {
  // 参考: https://nuxt.com/docs/getting-started/state-management#basic-usage
  const stickiesData = useState("stickies", () => [
    { id: 0, content: "テキスト...", x: 200, y: 220, bgColor: "#f9c900" },
    { id: 1, content: "テキスト...", x: 300, y: 300, bgColor: "#69f5ff" },
    { id: 2, content: "テキスト...", x: 400, y: 250, bgColor: "#ff6d63" },
  ]);

  // アプリ側で付箋の追加が行われた
  const add = () => {
    stickiesData.value.push({
      id: stickiesData.value.length,
      content: "テキスト...",
      x: 20,
      y: 50,
      bgColor: "#f9f9f9",
    });
  };

  // アプリ側で付箋の更新が行われた
  const update = (data) => {
    stickiesData.value.forEach((sticky, i) => {
      if (sticky.id === data.id) {
        stickiesData.value[i] = { ...data };
      }
    });
  };

  // これらのデータは、各ページやコンポーネントから呼び出すことができる
  return {
    data: readonly(stickiesData.value),
    add,
    update,
  };
};
