const STORE_KEY = "freelanceGearLearning_v01";

const categories = ["全部", "連絡", "図解", "開発", "納品", "書庫", "AI指揮"];

const gears = [
  {
    id: "slack",
    icon: "💬",
    name: "Slack",
    label: "作業現場の無線",
    category: "連絡",
    summary: "チームの会話、連絡、共有、確認を流す場所。メールより現場っぽい。",
    why: "フリーランスは一人でも、相手の現場に入ると連絡経路が必要になる。Slackを知っているだけで、チーム語の入口に立てる。",
    first: "まずは公式アプリを入れる。次に、自分だけの練習用メモとして『#今日の作業』みたいなチャンネルの意味を理解する。",
    usecase: "納品URL、スクショ、質問、修正依頼、進捗を短く投げる。長文作品ではなく現場の無線として使う。",
    mission: "5分だけ公式ページを開き、チャンネル、DM、スレッド、リアクションの4語だけ見る。",
    links: [
      ["Slack iOS公式", "https://slack.com/downloads/ios"],
      ["Slack Mac公式", "https://slack.com/downloads/mac"],
      ["Slack Windows公式", "https://slack.com/downloads/windows"]
    ]
  },
  {
    id: "miro",
    icon: "🧱",
    name: "Miro",
    label: "壁一面の作戦ボード",
    category: "図解",
    summary: "付箋、矢印、図解で頭の中を他人が見える板にする道具。",
    why: "ヒデロック脳内の配線を、相手が見える地上図面に変換する場所。AI時代の共同作戦机。",
    first: "空白ボードを1枚作り、付箋を6枚置く。誰が困る、何に困る、押すボタン、AIに渡すもの、返るもの、完了形。",
    usecase: "AIリモコンや訪看トリセツを1枚の流れにする。相手に『これです』と見せるための作戦図。",
    mission: "今日のアプリ案を6付箋だけにする。きれいに作らない。置けたら勝ち。",
    links: [
      ["Miro公式アプリ", "https://miro.com/apps/"],
      ["Miroデスクトップヘルプ", "https://help.miro.com/hc/en-us/articles/360017572854-Desktop-app"]
    ]
  },
  {
    id: "github",
    icon: "🐙",
    name: "GitHub",
    label: "作品の倉庫と作業日誌",
    category: "開発",
    summary: "コードを置き、変更履歴を残し、GitHub Pagesで公開URLにする場所。",
    why: "作品がURLになると、人に見せられる。コミットは保存ボタンではなく制作日誌。",
    first: "新しいリポジトリを1つ作る。index.html、style.css、script.jsを置く。Pagesをオンにする。",
    usecase: "URL、README、履歴、公開ページを納品パックに入れる。iPhone確認とChromePC編集を分ける。",
    mission: "READMEに『これは何のための道具か』を3行で書く。",
    links: [
      ["GitHub公式", "https://github.com/"],
      ["GitHub Desktop公式", "https://desktop.github.com/download/"],
      ["GitHub iOS公式", "https://apps.apple.com/jp/app/github/id1477376905"]
    ]
  },
  {
    id: "vscode",
    icon: "🧑‍💻",
    name: "VS Code",
    label: "コード作業机",
    category: "開発",
    summary: "HTML/CSS/JSを編集するための作業机。AI、Git、拡張機能も使える。",
    why: "全部を手打ちするためではなく、AIが作ったファイルを確認して直すための机として使う。",
    first: "まず開く対象を1フォルダに絞る。index.htmlを開いてタイトルだけ変更して保存する。",
    usecase: "GitHubに上げる前の微修正、文言変更、CSS調整、ファイル確認。",
    mission: "index.htmlのtitleを変更して、ブラウザで見た目が変わるか確認する。",
    links: [
      ["VS Code公式ダウンロード", "https://code.visualstudio.com/download"]
    ]
  },
  {
    id: "slides",
    icon: "📊",
    name: "Google Slides",
    label: "成果物の紙芝居",
    category: "納品",
    summary: "提案、説明、発表を3枚から作れる紙芝居。仕事語へ翻訳する場所。",
    why: "動くアプリだけでは伝わらない時に、相手の理解用に順番を作れる。",
    first: "3枚だけ作る。1枚目は問題、2枚目は画面、3枚目は渡すもの。",
    usecase: "営業資料、提案、進捗報告、納品説明。Miroより整った見せ方。",
    mission: "自分のアプリを3枚にする。問題、解決、URL。これだけでいい。",
    links: [
      ["Google Slides公式", "https://workspace.google.com/products/slides/"],
      ["Google Slidesを作成", "https://docs.google.com/presentation/create"]
    ]
  },
  {
    id: "canva",
    icon: "🎨",
    name: "Canva",
    label: "見せる紙芝居工房",
    category: "納品",
    summary: "サムネ、LP画像、スライド、説明カードを作る道具。見た目の包装係。",
    why: "初見の人には、構造だけでなく入口の見た目も必要。Geminiの外向き説明と相性がいい。",
    first: "テンプレを1つ選んで、タイトル、スクショ、3行説明だけ入れる。作り込みすぎない。",
    usecase: "noteサムネ、提案スライド、アプリ紹介カード、SNS用画像。",
    mission: "アプリ名、スクショ、1行説明だけ入れた紹介カードを作る。",
    links: [
      ["Canva公式ダウンロード", "https://www.canva.com/download/windows/"],
      ["Canva iOS公式", "https://apps.apple.com/us/app/canva-ai-video-photo-editor/id897446215"]
    ]
  },
  {
    id: "figma",
    icon: "🧩",
    name: "Figma",
    label: "画面設計図",
    category: "図解",
    summary: "UI画面、部品、コメント、プロトタイプを共有するデザイン道具。",
    why: "本格デザイナーにならなくても、画面の構造をチームに見せる時に強い。",
    first: "1画面だけ再現する。ボタン、見出し、説明文。全部ではなく1枚。",
    usecase: "UI案、画面遷移、コメント相談、デザイン共有。",
    mission: "今のアプリのトップ画面を四角と文字だけで再現する。",
    links: [
      ["Figma公式ダウンロード", "https://www.figma.com/downloads/"],
      ["Figma iOS公式", "https://apps.apple.com/us/app/figma/id1152747299"]
    ]
  },
  {
    id: "drive",
    icon: "🗄️",
    name: "Google Drive",
    label: "書庫",
    category: "書庫",
    summary: "資料、スクショ、PDF、スライド、納品物を置くクラウド書庫。",
    why: "部屋で一人で作るほど、ファイルが散らばる。書庫があると納品時に迷子が減る。",
    first: "案件ごとに1フォルダを作る。01_素材、02_スクショ、03_納品、の3つで十分。",
    usecase: "相手に共有リンクを渡す。スクショやPDFをまとめる。AIに見せる材料置き場にする。",
    mission: "『装備庫_練習』フォルダを作り、今日のスクショを1枚入れる。",
    links: [
      ["Google Drive公式", "https://www.google.com/drive/download/"],
      ["Google Drive iOS公式", "https://apps.apple.com/jp/app/google-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%96-%E5%AE%89%E5%85%A8%E3%81%AA%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B8/id507874739"]
    ]
  },
  {
    id: "ai-team",
    icon: "🤖",
    name: "AI制作班",
    label: "指揮と翻訳",
    category: "AI指揮",
    summary: "ChatGPT、Gemini、Copilot、Claudeを役割で使い分ける。全部に同じ質問をしない。",
    why: "AIに作らせる時代でも、役割分担がないとAIちゃんこ鍋になる。誰に何を頼むかが仕事の芯。",
    first: "明智君で構造、Geminiで外向き説明、Copilotで実装相談、Claudeで監査。この順番を1回だけ回す。",
    usecase: "企画、仕様、コード、レビュー、納品説明の分業。ユーザーはプロトタイプ指揮者。",
    mission: "同じアプリを4AIに投げず、まず明智君に『構造だけ』頼む。",
    links: [
      ["ChatGPT", "https://chatgpt.com/"],
      ["Gemini", "https://gemini.google.com/"],
      ["GitHub Copilot", "https://github.com/features/copilot"],
      ["Claude", "https://claude.ai/"]
    ]
  }
];


// ▼ v0.6 温度札ラベル
const temperatureLabels = {
  hold:  { icon: "🧊", label: "今はスルー" },
  watch: { icon: "👀", label: "眺めるだけ" },
  try:   { icon: "👆", label: "1回さわる" },
  core:  { icon: "🧰", label: "制作本線" }
};

const gearTemperatureMap = {
  slack: "watch",
  miro: "hold",
  github: "core",
  vscode: "watch",
  slides: "try",
  canva: "try",
  figma: "watch",
  drive: "try",
  "ai-team": "core"
};

const gearAdviceTextMap = {
  slack: "今は眺めるだけでOK。仕事場・部屋・名前呼び出しの構造だけ見る。",
  miro: "今はスルーでOK。作戦ボードという概念だけ棚に置く。",
  github: "ファイル管理、commit、公開URLづくりで使う制作本線。",
  vscode: "今は眺めるだけでOK。左にファイル、右に中身が出る構造だけ見る。",
  slides: "1回さわる価値あり。3枚の説明紙芝居を作る練習に向く。",
  canva: "1回さわる価値あり。テンプレでサムネや説明カードを作る感触を見る。",
  figma: "今は眺めるだけでOK。アプリ画面の設計図を見る道具として知る。",
  drive: "1回さわる価値あり。ファイルを置いて共有する感触を見る。",
  "ai-team": "制作本線。明智君、Gemini、Copilot、Claudeの役割分担を扱う。"
};

function getGearTemperatureKey(gear) {
  if (!gear) return "watch";
  return gear.temperature || gearTemperatureMap[gear.id] || "watch";
}

function getGearAdviceText(gear) {
  if (!gear) return "画面の形だけ見ればOK。暗記しなくていい。";
  return gear.adviceText || gearAdviceTextMap[gear.id] || "画面の形だけ見ればOK。暗記しなくていい。";
}

function getGearByStoryKey(storyKey) {
  return gears.find((gear) => storyKeyMap[gear.id] === storyKey || gear.id === storyKey);
}


// ▼ v0.5 操作紙芝居データ
const operationStories = {
  slack: {
    appName: "Slack",
    label: "仕事場の建物",
    purpose: "仕事場の建物に入り、話題ごとの部屋で会話し、自分宛ての呼びかけに返事し、URLやスクショを渡すための道具。",
    firstGoal: "自分宛ての呼びかけを見て、短く返事し、URLやスクショを貼れるようになる。",
    steps: [
      { title: "仕事場に入る", body: "Slackを開くと、左に部屋一覧、右に掲示板が見える。まずは建物の構造を知る。", mockType: "slack", focus: "sidebar", mockItems: ["仕事場の建物（ワークスペース）", "部屋リスト", "掲示板エリア"] },
      { title: "話題ごとの部屋を見る", body: "仕事の話題ごとに部屋が分かれている。部屋（チャンネル）を選ぶだけで、見る会話が変わる。", mockType: "slack", focus: "channels", mockItems: ["部屋（チャンネル）", "#連絡", "#GitHub", "#納品"] },
      { title: "自分宛ての呼びかけを見る", body: "自分の名前が呼ばれると、名前呼び出し（メンション）がつく。光っている投稿が『あなた宛て』。", mockType: "slack", focus: "mention", mockItems: ["@あなた", "名前呼び出し（メンション）"] },
      { title: "確認しましたと返す", body: "名前呼び出しを見たら、『確認しました！』と短く返すだけで仕事が進む。長文でなくていい。", mockType: "slack", focus: "reply", mockItems: ["入力欄", "短い返事"] },
      { title: "URLやスクショを渡す", body: "GitHub PagesのURLやスクショを貼ると、相手がすぐ確認できる。", mockType: "slack", focus: "attachment", mockItems: ["URLカード", "スクショカード"] }
    ],
    finish: "自分宛ての呼びかけに返事し、URLやスクショを貼れたら1回使ったことになる。"
  },
  miro: {
    appName: "Miro",
    label: "作戦ボード",
    purpose: "白い作戦ボードに付箋を置き、流れを図で説明し、共有リンクで渡すための道具。",
    firstGoal: "付箋を置いて矢印でつなぎ、共有リンクを作れるようになる。",
    steps: [
      { title: "白い作戦ボードを開く", body: "まっ白な作戦机（ボード）が広がる。ここに考えを置いていく。", mockType: "miro", focus: "board", mockItems: ["白い作戦机（ボード）", "ツールバー"] },
      { title: "メモを置く", body: "メモ（付箋）を置いて、作業の名前を書く。まず1枚だけでいい。", mockType: "miro", focus: "sticky", mockItems: ["メモ（付箋）", "付箋テキスト"] },
      { title: "矢印で流れをつなぐ", body: "『次にやること』を矢印でつなぐと、頭の中の流れが見える。", mockType: "miro", focus: "arrow", mockItems: ["付箋A", "矢印", "付箋B"] },
      { title: "コメントを書く", body: "気づいたことを付箋の横に書く。まだ決定ではなく、仮置きでいい。", mockType: "miro", focus: "comment", mockItems: ["吹き出し", "コメントテキスト"] },
      { title: "共有リンクを作る", body: "作戦ボードの鍵を作って、相手に渡す。", mockType: "miro", focus: "share", mockItems: ["共有ボタン", "URL"] }
    ],
    finish: "付箋を置いて矢印でつなぎ、共有リンクを作れたら1回使ったことになる。"
  },
  vscode: {
    appName: "VS Code",
    label: "作業机",
    purpose: "フォルダを開き、HTML/CSS/JSを編集し、保存してGitHubに渡すための道具。",
    firstGoal: "index.html を開いて1行直し、保存できるようになる。",
    steps: [
      { title: "フォルダを開く", body: "左に index.html / style.css / script.js が並ぶ。作業机の引き出しを開いた状態。", mockType: "vscode", focus: "files", mockItems: ["作業机の引き出し（フォルダ）", "ファイル一覧"] },
      { title: "index.html を開く", body: "右にコードが表示される。紙を広げた状態。", mockType: "vscode", focus: "editor", mockItems: ["コード枠", "行番号"] },
      { title: "タイトルを1行だけ直す", body: "h1の中の文字を変えるだけでOK。最初から全部読まない。", mockType: "vscode", focus: "edit-line", mockItems: ["<h1>タイトル</h1>"] },
      { title: "保存する", body: "保存すると変更が確定する。", mockType: "vscode", focus: "save", mockItems: ["保存しました"] },
      { title: "GitHubへ反映する前に監督チェック", body: "上書きか差分か、壊れないか確認する。", mockType: "vscode", focus: "director", mockItems: ["監督チェックボタン"] }
    ],
    finish: "index.html を開いて1行直し、保存できたら1回使ったことになる。"
  },
  slides: {
    appName: "Google Slides",
    label: "説明紙芝居",
    purpose: "タイトル・スクショ・説明文を並べて、共有リンクで渡すための道具。",
    firstGoal: "3枚の紙芝居を作って共有リンクをコピーできるようになる。",
    steps: [
      { title: "新しいスライドを作る", body: "白い紙が1枚出てくる。これが紙芝居の1枚（スライド）。", mockType: "slides", focus: "new-slide", mockItems: ["紙芝居の1枚（スライド）", "タイトル枠"] },
      { title: "1枚目にタイトルを書く", body: "『今日作ったもの』など短い言葉を書く。", mockType: "slides", focus: "title", mockItems: ["大きな文字", "タイトル"] },
      { title: "2枚目にスクショを置く", body: "見せたい画面を貼る。文章だけより伝わりやすい。", mockType: "slides", focus: "image", mockItems: ["スクショ枠", "画像枠"] },
      { title: "3枚目に使い方を書く", body: "『こう使います』を短く書く。", mockType: "slides", focus: "bullet", mockItems: ["箇条書き"] },
      { title: "共有リンクをコピーする", body: "紙芝居の鍵を作って渡す。", mockType: "slides", focus: "share", mockItems: ["共有ボタン", "URL"] }
    ],
    finish: "3枚の紙芝居を作って共有リンクをコピーできたら1回使ったことになる。"
  },
  figma: {
    appName: "Figma",
    label: "画面模型",
    purpose: "iPhoneサイズの画面模型を作り、コメントを書き、共有リンクで渡すための道具。",
    firstGoal: "iPhone枠を作り、ボタンを置き、コメントを書き、共有リンクを作れるようになる。",
    steps: [
      { title: "iPhoneサイズの四角を置く", body: "画面の枠（フレーム）を作る。ここがアプリ画面の模型になる。", mockType: "figma", focus: "frame", mockItems: ["画面の枠（フレーム）"] },
      { title: "タイトルを書く", body: "上に大きな文字を置く。", mockType: "figma", focus: "title", mockItems: ["太字テキスト"] },
      { title: "ボタンを置く", body: "四角い部品を置いて『押す場所』を作る。", mockType: "figma", focus: "button", mockItems: ["押す場所（ボタン）"] },
      { title: "コメントを書く", body: "気づいたことを吹き出しで書く。", mockType: "figma", focus: "comment", mockItems: ["吹き出し（コメント）"] },
      { title: "画面を2枚並べる", body: "『押したらこうなる』を並べて見せる。", mockType: "figma", focus: "prototype", mockItems: ["フレームA", "フレームB", "画面のつながり（プロトタイプ）"] },
      { title: "共有リンクを作る", body: "模型の鍵を作って渡す。", mockType: "figma", focus: "share", mockItems: ["共有ボタン", "URL"] }
    ],
    finish: "iPhone枠を作り、ボタンを置き、コメントを書き、共有リンクを作れたら1回使ったことになる。"
  },
  canva: {
    appName: "Canva",
    label: "仕上げの一枚",
    purpose: "テンプレを選び、タイトルとスクショを置き、説明文を入れて、画像として渡すための道具。",
    firstGoal: "テンプレを選び、タイトルとスクショと説明文を置き、画像として保存できるようになる。",
    steps: [
      { title: "テンプレートを選ぶ", body: "すでに整ったひな形（テンプレ）を選ぶだけでOK。", mockType: "canva", focus: "template", mockItems: ["ひな形（テンプレ）"] },
      { title: "タイトルを書く", body: "上に短いタイトルを置く。", mockType: "canva", focus: "title", mockItems: ["大きな文字"] },
      { title: "スクショを置く", body: "見せたい画面を貼る。", mockType: "canva", focus: "image", mockItems: ["スクショ枠", "画像枠"] },
      { title: "一言説明を入れる", body: "『こういうものです』を短く書く。", mockType: "canva", focus: "caption", mockItems: ["説明テキスト"] },
      { title: "画像として保存する", body: "完成した1枚を画像として渡す。", mockType: "canva", focus: "download", mockItems: ["ダウンロードボタン"] }
    ],
    finish: "テンプレを選び、タイトルとスクショと説明文を置き、画像として保存できたら1回使ったことになる。"
  }
};

const storyKeyMap = {
  slack: "slack",
  miro: "miro",
  vscode: "vscode",
  "vs-code": "vscode",
  slides: "slides",
  "google-slides": "slides",
  figma: "figma",
  canva: "canva"
};


// ▼ v0.7.1 今日の装備ルート
const dailyRoutes = {
  hold: {
    id: "hold",
    title: "🧊 今日は省エネ",
    description: "今日は無理に触らない。やらない装備を確認するだけでOK。",
    steps: [
      { label: "保留", text: "Miroは今はスルーでOKと確認する。", storyKey: null },
      { label: "見る", text: "装備カードを1枚だけ眺める。", storyKey: null },
      { label: "完了", text: "今日はここで閉じてOK。", storyKey: null }
    ]
  },
  watch: {
    id: "watch",
    title: "👀 眺めるだけルート",
    description: "覚えずに、画面の形だけ見るルート。",
    steps: [
      { label: "紙芝居", text: "Slackの仕事場構造を見る。", storyKey: "slack" },
      { label: "紙芝居", text: "VS Codeの左ファイル・右中身だけ見る。", storyKey: "vscode" },
      { label: "完了", text: "覚えようとせず、今日は目撃だけで終了。", storyKey: null }
    ]
  },
  try: {
    id: "try",
    title: "👆 1回さわるルート",
    description: "1回だけ押す・書く・貼る練習。",
    steps: [
      { label: "紙芝居", text: "Google Slidesの3枚構造を見る。", storyKey: "slides" },
      { label: "紙芝居", text: "Canvaのテンプレ構造を見る。", storyKey: "canva" },
      { label: "完了", text: "実物はまだ開かなくてもOK。1回触る候補が見えたら終了。", storyKey: null }
    ]
  },
  core: {
    id: "core",
    title: "🧰 制作本線ルート",
    description: "今の制作や公開に直結する確認ルート。",
    steps: [
      { label: "確認", text: "GitHub Pagesの公開URLを開いて確認する。", storyKey: null },
      { label: "確認", text: "READMEや最新バージョン名を確認する。", storyKey: null },
      { label: "完了", text: "動いていれば本線チェック完了。", storyKey: null }
    ]
  }
};


const roadmapSteps = [
  {
    id: "step0",
    icon: "🏗️",
    num: "0",
    title: "地下1階：入口",
    body: "AIと仕事する前の準備。iPhone操作、道具名、共有＝鍵の概念を知る。",
    view: "viewTour",
    actionType: "current",
    actionLabel: "現在地：入口"
  },
  {
    id: "step1",
    icon: "👁️",
    num: "1",
    title: "見学",
    body: "ホワイトカラーAI仕事の1日の流れを知る。",
    view: "viewTour",
    actionType: "scroll",
    scrollTarget: "tourPanel",
    actionLabel: "見学スライドへ進む"
  },
  {
    id: "step2",
    icon: "🔑",
    num: "2",
    title: "共有",
    body: "閲覧権限、コメント権限、編集権限、公開URL、スクショ共有、画面共有を理解する。",
    view: "viewShare"
  },
  {
    id: "step3",
    icon: "🧰",
    num: "3",
    title: "装備",
    body: "Slack、Miro、Google Slides、GitHub Pages、Google Driveなどの役割を理解する。",
    view: "viewGear"
  },
  {
    id: "step4",
    icon: "📍",
    num: "4",
    title: "今日",
    body: "iPhoneだけでできる小ミッションを実行する。",
    view: "viewToday"
  },
  {
    id: "step5",
    icon: "📦",
    num: "5",
    title: "納品",
    body: "URL、スクショ、README、説明文、共有権限、作業ログをまとめる。",
    view: "viewDelivery"
  },
  {
    id: "step6",
    icon: "🕵️",
    num: "6",
    title: "監督",
    body: "AIの出力を貼る前に、完全版か差分か、上書きか貼り足しか、どのファイルかを確認する。",
    view: "viewPrompt"
  },
  {
    id: "step7",
    icon: "🎯",
    num: "7",
    title: "ゴール",
    body: "説明できて、再現できて、納品できる人になる。",
    view: "viewPrompt"
  }
];

const tourSlides = [
  {
    time: "AM 9:00",
    title: "朝：Slackで連絡を見る",
    body: "チームのチャットで、今日の連絡、質問、修正依頼を確認する。メールの山ではなく、現場の無線を見る時間。",
    tools: ["Slack"],
    relatedGearIds: ["slack"],
    note: "ここで覚える概念：連絡、共有、確認。"
  },
  {
    time: "AM 10:30",
    title: "午前：Miroで作戦ボードを見る",
    body: "付箋、矢印、図で、頭の中の流れを見える場所に置く。チームで見る黒板、ひとりでも使える作戦机。",
    tools: ["Miro"],
    relatedGearIds: ["miro"],
    note: "ここで覚える概念：図にする、流れを見せる。"
  },
  {
    time: "PM 1:00",
    title: "昼：仕様や説明文を見る",
    body: "Googleドキュメントのような文書で、何を作るか、誰の何を軽くするか、確認してほしい点を読む。",
    tools: ["Google Docs", "Google Drive"],
    relatedGearIds: ["drive"],
    note: "ここで覚える概念：文書、仕様、共有リンク。"
  },
  {
    time: "PM 3:00",
    title: "午後：スライドで順番に説明する",
    body: "Google SlidesやCanvaで、問題、画面、渡すものを紙芝居にする。相手の脳に順番通り見せる時間。",
    tools: ["Google Slides", "Canva"],
    relatedGearIds: ["slides", "canva"],
    note: "ここで覚える概念：プレゼン、説明、見せ方。"
  },
  {
    time: "PM 5:00",
    title: "夕方：URLで成果物を共有する",
    body: "GitHub Pagesの公開URLやGoogle Driveのリンクを送る。ファイルを投げるより、見える場所への入口を渡す感覚。",
    tools: ["GitHub", "Google Drive"],
    relatedGearIds: ["github", "drive"],
    note: "ここで覚える概念：URL、閲覧、共有。"
  },
  {
    time: "PM 6:00",
    title: "最後：納品パックにまとめる",
    body: "公開URL、スクショ3枚、README 3行、説明文をセットにする。作品を仕事っぽく渡すための最小核。",
    tools: ["GitHub", "Google Drive", "Slack"],
    relatedGearIds: ["github", "drive", "slack"],
    note: "ここで覚える概念：納品、確認、次の修正。"
  }
];


const shareModes = [
  {
    id: "private",
    icon: "🔒",
    title: "自分だけ",
    body: "相手は見られない。リンクを知っていても、権限がなければ部屋の外で止まる。",
    example: "Google DriveやDocsで『制限付き』になっている状態。まず自分だけで作る時の鍵。",
    demoUrl: "https://example.com/freelance-gear/private"
  },
  {
    id: "view",
    icon: "👀",
    title: "閲覧権限",
    body: "相手は見るだけ。中身を勝手に直せない。確認してほしい時のいちばん基本の共有。",
    example: "『これ見ておいてください』の鍵。納品前の確認、資料の共有、スライドの確認に使う。",
    demoUrl: "https://example.com/freelance-gear/view"
  },
  {
    id: "comment",
    icon: "💬",
    title: "コメント権限",
    body: "本文は直せないけど、付箋やコメントを残せる。相手の意見をもらうための鍵。",
    example: "『ここだけ確認してください』『修正点をコメントください』の時に使う。",
    demoUrl: "https://example.com/freelance-gear/comment"
  },
  {
    id: "edit",
    icon: "✏️",
    title: "編集権限",
    body: "相手も中身を直接編集できる。共同作業向けだが、渡す相手は選ぶ。",
    example: "チームで同じGoogleスライドやDocsを直す時の鍵。クライアントに渡す時は慎重に。",
    demoUrl: "https://example.com/freelance-gear/edit"
  },
  {
    id: "screen",
    icon: "📺",
    title: "画面共有",
    body: "ファイルを渡すのではなく、今見ている画面を相手に映す。会議中の実況中継。",
    example: "Zoom、Google Meet、Teamsで『今この画面です』と見せながら説明する。",
    demoUrl: "https://example.com/freelance-gear/screen"
  },
  {
    id: "public",
    icon: "🌐",
    title: "公開URL",
    body: "URLを開けば見られる状態。GitHub PagesのアプリURLはこの感覚に近い。",
    example: "『このURLで動きます』と渡せる。作品が仕事の入口になる瞬間。",
    demoUrl: "https://example.com/freelance-gear/public"
  },
  {
    id: "screenshot",
    icon: "📸",
    title: "スクショ共有",
    body: "画面を画像として送る。速いが、相手はクリックも編集もできない。",
    example: "iPhoneで今の画面を撮って『ここです』と伝える時の最短共有。",
    demoUrl: "https://example.com/freelance-gear/screenshot"
  }
];

let currentTourIndex = 0;
let currentStoryKey = null;
let currentStoryIndex = 0;


const deliveryItems = [
  { id: "url", title: "公開URL", text: "GitHub Pagesや試作URL。まず相手が開けること。" },
  { id: "screens", title: "スクショ3枚", text: "入口、操作中、結果画面。スマホ確認が強い。" },
  { id: "readme", title: "README 3行", text: "これは何か、誰の何を軽くするか、どう使うか。" },
  { id: "board", title: "1枚作戦ボード", text: "誰が困る、押すボタン、AIに渡すもの、完了形。" },
  { id: "slides", title: "3枚スライド", text: "問題、解決、渡すもの。仕事語への翻訳。" },
  { id: "handoff", title: "納品メモ", text: "URL、使い方、確認してほしい点、次に直す点。" }
];

// v0.8 納品パック見本データ
const deliveryPack = {
  url: "https://hiderock61.github.io/",
  oneWord: "iPhoneだけで、AI時代の仕事道具・今日の進め方・納品の型を学べるフリーランス訓練アプリ。",
  screenshots: [
    "今日タブ：今日の装備ルート",
    "装備タブ：温度札つき装備カード",
    "納品タブ：v0.8納品パック"
  ],
  features: [
    "Slack、Figma、VS Codeなどの仕事道具を紙芝居で見学できる",
    "温度札で、今やる装備・眺めるだけの装備・スルーしてよい装備を分けられる",
    "今日の状態に合わせて、省エネ／見る／さわる／本線の3ステップを選べる"
  ],
  updates: [
    "v0.8で納品タブに納品パックを追加",
    "スクショ3枚候補と提出文テンプレを表示",
    "公開URLだけでなく、相手が確認しやすい形で渡せるようにした"
  ],
  focusPoints: [
    "今日タブの今日の装備ルート",
    "装備タブの温度札",
    "納品タブの提出文コピー"
  ],
  nextQuestions: [
    "初見の人にアプリの目的が伝わるか",
    "スクショ3枚の選び方がわかりやすいか",
    "納品文が仕事相手に渡せる文章になっているか"
  ]
};


// v0.9 納品パック入力版ドラフト
const deliveryDraft = {
  url: "https://hiderock61.github.io/",
  oneWord: "iPhoneだけで、AI時代の仕事道具・今日の進め方・納品の型を学べるフリーランス訓練アプリ。",
  features: [
    "Slack、Figma、VS Codeなどの仕事道具を紙芝居で見学できる",
    "温度札で、今やる装備・眺めるだけの装備・スルーしてよい装備を分けられる",
    "今日の状態に合わせて、省エネ／見る／さわる／本線の3ステップを選べる"
  ],
  updates: [
    "v0.9で納品パック入力版を追加",
    "入力内容から完成文プレビューを作れるようにした",
    "提出文をコピーできるようにした"
  ],
  focusPoints: [
    "納品タブの入力フォーム",
    "完成文を見るプレビュー",
    "提出文コピーの動作"
  ],
  nextQuestions: [
    "初見の人に提出文の意味が伝わるか",
    "入力欄の数が多すぎないか",
    "納品文が相手に確認しやすい文章になっているか"
  ]
};

// v2.0 3つのお渡しレターモード
let deliveryMode = "initial";

const conditions = [
  { id: "iphone", label: "📱 iPhoneだけ", title: "iPhoneだけならリンク装備", text: "1つだけ公式リンクを開き、ブックマークかホーム画面に置く。今日は深く覚えない。" },
  { id: "pc", label: "💻 ChromePCあり", title: "PCありならファイル装備", text: "GitHubかVS Codeを開き、index.htmlのタイトルだけ変更する。変更できたら勝ち。" },
  { id: "five", label: "⏱️ 5分だけ", title: "5分なら用語1個", text: "Slackならチャンネル、Miroならボード、GitHubならリポジトリ。1語だけ意味を見る。" },
  { id: "fifteen", label: "🧪 15分できる", title: "15分なら小ミッション", text: "Miro風6問か、スライド3枚の骨だけ作る。完成度は見ない。" },
  { id: "heavy", label: "🛌 しんどい", title: "しんどい日は確認だけ", text: "装備カードを1枚開く。リンクは踏まなくていい。今日の脳に道具の名前を置く。" },
  { id: "deliver", label: "📦 納品に寄せたい", title: "納品なら3点セット", text: "URL、スクショ1枚、1行説明。この3つだけ作る。仕事っぽさの最小核。" }
];

const promptTemplates = {
  akechikun: "このアプリ案を、誰の何を軽くする道具なのか、入力、処理、出力、納品物に分けてください。抽象ではなく、今日押せる一手まで落としてください。",
  gemini: "このアプリ案を、初見ユーザーに伝わる説明文、3枚スライド構成、LPの見出しに整理してください。専門用語を減らし、仕事で見せられる言葉にしてください。",
  copilot: "このWebアプリをGitHub Pagesで動かす前提で、index.html、style.css、script.jsの構成、UIフロー、localStorageの使い方、実装順をレビューしてください。",
  claude: "以下の仕様を、実装者が迷わない短い仕様書に圧縮し、足りない状態、バグりそうな箇所、最小実装の優先順位を出してください。"
};

let state = loadState();
let currentFilter = "全部";
let selectedCondition = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    return saved || { gear: {}, delivery: {}, missionsDone: 0 };
  } catch {
    return { gear: {}, delivery: {}, missionsDone: 0 };
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
  renderProgress();
}

function gearStatus(id) {
  return state.gear[id] || { installed: false, understood: false, used: false };
}

function setGearStatus(id, key) {
  const status = gearStatus(id);
  status[key] = !status[key];
  state.gear[id] = status;
  saveState();
  renderGear();
}

function doneCount() {
  let total = 0;
  for (const gear of gears) {
    const s = gearStatus(gear.id);
    total += Number(s.installed) + Number(s.understood) + Number(s.used);
  }
  total += Object.values(state.delivery || {}).filter(Boolean).length;
  total += state.missionsDone || 0;
  return total;
}

function maxCount() {
  return gears.length * 3 + deliveryItems.length + 5;
}

function renderProgress() {
  const done = doneCount();
  const max = maxCount();
  const pct = Math.min(100, Math.round((done / max) * 100));
  document.getElementById("progressText").textContent = `${done}/${max} 装備ポイント`;
  document.getElementById("progressBar").style.width = `${pct}%`;
}



function renderRoadmap() {
  const container = document.getElementById("roadmapContainer");
  if (!container) return;
  container.innerHTML = `
    <section class="roadmap-hero">
      <p class="eyebrow">Roadmap</p>
      <h3>フリーランスAI仕事ロードマップ</h3>
      <p>このアプリは、道具名の暗記ではなく、見学、共有、装備、今日の一手、納品、監督の順で「仕事の型」を装備する訓練場です。</p>
    </section>
    <div class="roadmap-grid">
      ${roadmapSteps.map(step => {
        const label = step.actionLabel || "対応タブを見る";
        const actionButton = step.actionType === "current"
          ? `<button class="roadmap-button is-current" type="button" disabled>${label}</button>`
          : step.actionType === "scroll"
            ? `<button class="roadmap-button" type="button" data-roadmap-scroll="${step.scrollTarget || "tourPanel"}">${label}</button>`
            : `<button class="roadmap-button" type="button" data-roadmap-goto="${step.view}">${label}</button>`;
        return `
          <article class="roadmap-card">
            <div class="roadmap-title"><span class="roadmap-number">${step.num}</span><span>${step.icon} ${step.title}</span></div>
            <p class="roadmap-body">${step.body}</p>
            ${actionButton}
          </article>
        `;
      }).join("")}
    </div>
  `;
  container.querySelectorAll("[data-roadmap-goto]").forEach(button => {
    button.addEventListener("click", () => goToRoadmapStep(button.dataset.roadmapGoto));
  });
  container.querySelectorAll("[data-roadmap-scroll]").forEach(button => {
    button.addEventListener("click", () => goToRoadmapScroll(button.dataset.roadmapScroll));
  });
}

function renderTour() {
  renderRoadmap();
  const slide = tourSlides[currentTourIndex];
  const box = document.getElementById("tourSlide");
  if (!box) return;
  document.getElementById("tourCounter").textContent = `${currentTourIndex + 1}/${tourSlides.length}`;
  box.innerHTML = `
    <span class="tour-time">${slide.time}</span>
    <h3>${slide.title}</h3>
    <p>${slide.body}</p>
    <div class="tour-tools">
      ${slide.tools.map(tool => `<span class="pill">${tool}</span>`).join("")}
    </div>
    <p class="tour-note">${slide.note}</p>
  `;
  document.getElementById("tourPrevBtn").disabled = currentTourIndex === 0;
  document.getElementById("tourNextBtn").textContent = currentTourIndex === tourSlides.length - 1 ? "最初へ" : "次へ";
}


function renderShare() {
  const container = document.getElementById("shareContainer");
  if (!container) return;
  container.innerHTML = shareModes.map(mode => `
    <article class="share-card">
      <div class="share-card-head">
        <span class="share-icon">${mode.icon}</span>
        <div>
          <p class="eyebrow">Share key</p>
          <h3 class="share-title">${mode.title}</h3>
        </div>
      </div>
      <p class="share-body">${mode.body}</p>
      <p class="share-example">${mode.example}</p>
      <div class="share-actions">
        <button class="share-copy-button" type="button" data-share-copy="${mode.demoUrl}">🔗 ダミーURLをコピー</button>
        <button class="share-copy-button secondary" type="button" data-share-ai="${mode.id}">🤖 AIに聞く文をコピー</button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll("[data-share-copy]").forEach(button => {
    button.addEventListener("click", () => copyText(button.dataset.shareCopy));
  });

  container.querySelectorAll("[data-share-ai]").forEach(button => {
    const mode = shareModes.find(item => item.id === button.dataset.shareAi);
    button.addEventListener("click", () => copyText(`共有の「${mode.title}」について、初心者向けに、何ができるか、何ができないか、仕事ではいつ使うか、iPhoneだけでどう練習するかを短く分けてください。`));
  });
}



const directorQuiz = {
  title: "AIのワナを見破れ！監督クイズ",
  question: "AIに『ログアウトボタンを追加して』と頼んだら、追加パーツだけが返ってきた。監督としてどう扱う？",
  before: "<p>ようこそ、ヒデちゃん！</p>\n<button>プロフィールを見る</button>",
  aiOutput: "<button>ログアウトする</button>",
  choices: [
    { id: "A", text: "全部コピーして上書きする", result: "❌ 失敗：元の表示が消えて、ログアウトだけの画面になる。AIが差分だけ出した時に全上書きすると母屋が消える。", tone: "wrong" },
    { id: "B", text: "今のコードの一番下にそのまま貼り足す", result: "△ 惜しい：残す判断は良い。ただし入れる場所を確認していない。変な位置に出ることがある。", tone: "close" },
    { id: "C", text: "元のコードを残しつつ、正しい場所に入れ込む", result: "⭕ 成功：これが差分監督。元の機能を残し、追加パーツを正しい場所へハメ込む。", tone: "correct" }
  ]
};

const directorCards = [
  { id: "full-or-diff", icon: "🧩", title: "完全版？差分？", body: "完全版は丸ごと置き換え。差分は一部だけ貼り足す。まずAIがどちらを出しているか見る。", tip: "新築か、リフォーム部品か。ここを間違えると既存機能が消える。", prompt: "これは完全版ですか？差分パッチですか？既存機能を壊さない形式になっていますか？" },
  { id: "overwrite-or-append", icon: "🪛", title: "上書き？貼り足し？", body: "上書きは既存ファイルを丸ごと置換すること。貼り足しは既存を残して追加すること。安全度が違う。", tip: "『そのまま全部置き換えて』と明記されていないなら、一度止まる。", prompt: "このコードは上書きが必要ですか？貼り足しで安全に追加できますか？既存部分を消す必要はありますか？" },
  { id: "which-file", icon: "📁", title: "どのファイル？", body: "index.htmlは骨組み、style.cssは見た目、script.jsは動き、README.mdは説明。コードの住所を確認する。", tip: "HTMLの部品をCSSへ入れても動かない。JSをREADMEへ入れてもアプリは動かない。", prompt: "このコードは index.html / style.css / script.js / README.md のどれに入れるべきですか？追加する場所も具体的に示してください。" },
  { id: "old-or-new", icon: "📅", title: "古い？新しい？", body: "v0.1、v0.2-tour、v0.2-share、v0.4など、どの版を触っているか確認する。", tip: "さっきのZIPとGitHubに上がっている最新版が違うことがある。", prompt: "この提案は今の最新版に対応していますか？古い版、古いファイル名、古いIDを前提にしていませんか？" },
  { id: "github-or-test", icon: "🌐", title: "GitHub用？確認用？", body: "GitHub Pages本番用は index.html / style.css / script.js。standalone.html や txt は確認用の場合がある。", tip: "script-js-download.txt は中身確認用。GitHub本番では script.js という名前が必要。", prompt: "これは GitHub Pages 用の本番コードですか？確認用の一時ファイルですか？本番に必要なファイル名を教えてください。" },
  { id: "safe-or-break", icon: "🛡️", title: "既存を壊さない？", body: "gears、tourSlides、shareModes、renderGearなど既存データや関数を上書きしていないか見る。", tip: "AIが完全版風に出しても、中で既存データが省略されている場合がある。", prompt: "既存のデータや関数を上書きしていませんか？追加だけで済みますか？壊れそうな箇所を先に指摘してください。" },
  { id: "ai-context", icon: "🧭", title: "文脈のバトン", body: "Geminiの概念整理、Copilotの実装案、ChatGPTの統合判断が同じ目的につながっているか確認する。", tip: "AI同士の出力がズレた時、監督が『今の母屋はこれ』と戻す。", prompt: "この提案は、Geminiの概念整理、Copilotの実装案、ChatGPTの統合判断と矛盾していませんか？現在の前提を整理してください。" }
];

function renderDirector() {
  const container = document.getElementById("directorContainer") || document.getElementById("viewPrompt");
  if (!container) return;
  const esc = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  container.innerHTML = `
    <div class="section-heading">
      <div><p class="eyebrow">Director console</p><h2 id="directorTitle">🕵️ 監督モード</h2></div>
      <span class="badge soft">差分監督</span>
    </div>
    <div class="director-intro panel"><p class="panel-lead">AIは制作班。あなたは、出力をどこに入れるか、上書きしてよいか、既存を壊さないかを見る監督。コードを全部読めなくても、貼る前に一度ここを通る。</p></div>
    <article class="director-card warning">
      <div class="director-card-head"><span class="director-icon">🎬</span><div><p class="eyebrow">Quiz</p><h3 class="director-title">${directorQuiz.title}</h3></div></div>
      <p class="director-body">${directorQuiz.question}</p>
      <p class="eyebrow">元のコード</p><code class="director-code">${esc(directorQuiz.before)}</code>
      <p class="eyebrow">AIからの出力</p><code class="director-code">${esc(directorQuiz.aiOutput)}</code>
      <div class="director-choices">${directorQuiz.choices.map(choice => `<button class="director-choice" type="button" data-director-quiz="${choice.id}">${choice.id}. ${choice.text}</button>`).join("")}</div>
      <div id="directorQuizResult" class="director-result"></div>
    </article>
    <div class="director-grid">
      ${directorCards.map(card => `
        <article class="director-card">
          <div class="director-card-head"><span class="director-icon">${card.icon}</span><div><p class="eyebrow">Director card</p><h3 class="director-title">${card.title}</h3></div></div>
          <p class="director-body">${card.body}</p><p class="director-tip">${card.tip}</p>
          <div class="director-actions"><button class="director-copy-button" type="button" data-director-copy="${esc(card.prompt)}">AIに確認する文をコピー</button></div>
        </article>`).join("")}
    </div>`;
  container.querySelectorAll("[data-director-quiz]").forEach(button => {
    button.addEventListener("click", () => {
      const choice = directorQuiz.choices.find(item => item.id === button.dataset.directorQuiz);
      if (!choice) return;
      container.querySelectorAll("[data-director-quiz]").forEach(btn => btn.classList.remove("correct", "wrong", "close"));
      button.classList.add(choice.tone);
      const result = document.getElementById("directorQuizResult");
      result.textContent = choice.result;
      result.className = "director-result show";
    });
  });
  container.querySelectorAll("[data-director-copy]").forEach(button => {
    button.addEventListener("click", () => copyText(button.dataset.directorCopy));
  });
}


function openStory(key) {
  if (!operationStories[key]) {
    showToast("この装備の紙芝居はまだ準備中");
    return;
  }
  currentStoryKey = key;
  currentStoryIndex = 0;
  switchView("viewStory");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStory() {
  if (!currentStoryKey || !operationStories[currentStoryKey]) return;
  const story = operationStories[currentStoryKey];
  const step = story.steps[currentStoryIndex];
  if (!step) return;

  const appNameEl = document.getElementById("storyAppName");
  const appLabelEl = document.getElementById("storyAppLabel");
  const stepTitleEl = document.getElementById("storyStepTitle");
  const stepBodyEl = document.getElementById("storyStepBody");
  const mockEl = document.getElementById("storyMock");
  const learnEl = document.getElementById("storyLearn");
  const finishEl = document.getElementById("storyFinish");
  const counterEl = document.getElementById("storyCounter");
  const prevEl = document.getElementById("storyPrev");
  const nextEl = document.getElementById("storyNext");

  if (!appNameEl || !mockEl) return;

  const gearForStory = getGearByStoryKey(currentStoryKey);
  const storyTempKey = getGearTemperatureKey(gearForStory);
  const storyTemp = temperatureLabels[storyTempKey] || temperatureLabels.watch;
  const storyTempParent = appNameEl.parentNode;
  let storyTempBadge = document.getElementById("storyTempBadge");
  if (!storyTempBadge && storyTempParent) {
    storyTempBadge = document.createElement("div");
    storyTempBadge.id = "storyTempBadge";
    storyTempParent.insertBefore(storyTempBadge, appNameEl);
  }
  if (storyTempBadge) {
    storyTempBadge.className = `story-temp-badge temp-${storyTempKey}`;
    storyTempBadge.textContent = `${storyTemp.icon} ${storyTemp.label}`;
  }

  appNameEl.textContent = `${story.appName}`;
  appLabelEl.textContent = `${story.label}｜${story.purpose}`;
  stepTitleEl.textContent = step.title;
  stepBodyEl.textContent = step.body;
  mockEl.innerHTML = renderMock(step);
  learnEl.innerHTML = `<strong>今ここで覚えること：</strong>${story.firstGoal}<div class="mock-focus-chips">${step.mockItems.map(item => `<span>${item}</span>`).join("")}</div>`;
  finishEl.innerHTML = `<strong>到達点：</strong>${story.finish}`;
  counterEl.textContent = `${currentStoryIndex + 1}/${story.steps.length}`;
  prevEl.disabled = currentStoryIndex === 0;
  nextEl.textContent = currentStoryIndex === story.steps.length - 1 ? "最初へ" : "次へ";
}

function renderMock(step) {
  const focus = step.focus;
  const chips = `<div class="mock-focus-chips">${step.mockItems.map(item => `<span>${item}</span>`).join("")}</div>`;

  if (step.mockType === "slack") {
    return `
      <div class="mock-slack">
        <div class="mock-slack-sidebar">
          <div class="mock-slack-workspace ${focus === "sidebar" ? "is-focus" : ""}">🏢 AIアプリ制作所</div>
          <div class="mock-slack-room ${focus === "channels" ? "is-focus" : ""}"># 連絡（部屋）</div>
          <div class="mock-slack-room ${focus === "channels" ? "is-focus" : ""}"># GitHub（部屋）</div>
          <div class="mock-slack-room ${focus === "channels" || focus === "mention" ? "is-focus" : ""}"># 納品（あなた宛て）</div>
        </div>
        <div class="mock-slack-main">
          <div class="mock-slack-post ${focus === "mention" ? "is-focus" : ""}">👩 @あなた README確認お願いします。</div>
          <div class="mock-slack-post ${focus === "reply" ? "is-focus" : ""}">😲 確認しました！スクショ3枚も撮ります。</div>
          <div class="mock-slack-post ${focus === "attachment" ? "is-focus" : ""}">🌐 公開URLを貼る<div class="mock-slack-url">https://example.github.io/app/</div></div>
          <div class="mock-input">ここに短く返事を書く</div>
        </div>
      </div>
      ${chips}
      <p class="mock-caption">Slackは、仕事場の建物の中で「どの部屋に何を書くか」を見る道具。</p>
    `;
  }

  if (step.mockType === "miro") {
    return `
      <div class="mock-miro-board">
        <div class="mock-miro-sticky ${focus === "sticky" || focus === "arrow" ? "is-focus" : ""}">困りごと<br>Slackがわからない</div>
        <div class="mock-miro-arrow ${focus === "arrow" ? "is-focus" : ""}">→</div>
        <div class="mock-miro-sticky ${focus === "arrow" ? "is-focus" : ""}">解決<br>操作紙芝居</div>
        <div class="mock-miro-comment ${focus === "comment" ? "is-focus" : ""}">💬 まず模型で見る</div>
        <div class="mock-share-pill ${focus === "share" ? "is-focus" : ""}">🔗 共有リンク</div>
      </div>
      ${chips}
      <p class="mock-caption">Miroは、頭の中の順番を白い作戦机に置く道具。</p>
    `;
  }

  if (step.mockType === "vscode") {
    return `
      <div class="mock-vscode">
        <div class="mock-vscode-files">
          <div class="mock-file ${focus === "files" || focus === "editor" || focus === "edit-line" ? "is-focus" : ""}">index.html</div>
          <div class="mock-file">style.css</div>
          <div class="mock-file">script.js</div>
          <div class="mock-file">README.md</div>
        </div>
        <div class="mock-vscode-editor">
          <div class="mock-code-line">&lt;body&gt;</div>
          <div class="mock-code-line ${focus === "edit-line" ? "is-focus" : ""}">&lt;h1&gt;フリーランス装備庫&lt;/h1&gt;</div>
          <div class="mock-code-line">&lt;/body&gt;</div>
          <div class="mock-save ${focus === "save" ? "is-focus" : ""}">✓ 保存しました</div>
          <div class="mock-save ${focus === "director" ? "is-focus" : ""}">🕵️ 貼る前に監督チェック</div>
        </div>
      </div>
      ${chips}
      <p class="mock-caption">VS Codeは、ファイルを開いて1行直すための作業机。</p>
    `;
  }

  if (step.mockType === "slides") {
    return `
      <div class="mock-slides-layout">
        <div class="mock-slide-thumbs">
          <div class="mock-slide-thumb ${focus === "title" || focus === "new-slide" ? "is-focus" : ""}"></div>
          <div class="mock-slide-thumb ${focus === "image" ? "is-focus" : ""}"></div>
          <div class="mock-slide-thumb ${focus === "bullet" ? "is-focus" : ""}"></div>
        </div>
        <div class="mock-slide">
          <div class="mock-slide-title ${focus === "title" ? "is-focus" : ""}">今日作ったもの</div>
          <div class="mock-slide-image ${focus === "image" ? "is-focus" : ""}">スクショ枠</div>
          <div class="mock-slide-bullets ${focus === "bullet" ? "is-focus" : ""}">・何のため？<br>・どう使う？<br>・URLはどこ？</div>
          <div class="mock-share-pill ${focus === "share" ? "is-focus" : ""}">🔗 共有リンクをコピー</div>
        </div>
      </div>
      ${chips}
      <p class="mock-caption">Google Slidesは、相手に順番通り見せるための説明紙芝居。</p>
    `;
  }

  if (step.mockType === "figma") {
    return `
      <div class="mock-figma-canvas">
        <div class="mock-frame ${focus === "frame" || focus === "title" || focus === "button" || focus === "comment" ? "is-focus" : ""}">
          <div class="mock-frame-title ${focus === "title" ? "is-focus" : ""}">アプリ名</div>
          <div class="mock-frame-button ${focus === "button" ? "is-focus" : ""}">押す場所</div>
          <div class="mock-frame-comment ${focus === "comment" ? "is-focus" : ""}">💬 ここを説明</div>
        </div>
        <div class="mock-proto-line ${focus === "prototype" ? "is-focus" : ""}">→</div>
        <div class="mock-frame ${focus === "prototype" ? "is-focus" : ""}">
          <div class="mock-frame-title">次の画面</div>
          <div class="mock-frame-button">結果を見る</div>
        </div>
        <div class="mock-share-pill ${focus === "share" ? "is-focus" : ""}">🔗 共有リンク</div>
      </div>
      ${chips}
      <p class="mock-caption">Figmaは、本物を作る前に画面の模型を人に見せる道具。</p>
    `;
  }

  if (step.mockType === "canva") {
    return `
      <div class="mock-canva">
        <div class="mock-canva-template ${focus === "template" ? "is-focus" : ""}">ひな形（テンプレ）</div>
        <div class="mock-canva-title ${focus === "title" ? "is-focus" : ""}">アプリ紹介カード</div>
        <div class="mock-canva-image ${focus === "image" ? "is-focus" : ""}">スクショ枠</div>
        <div class="mock-canva-caption ${focus === "caption" ? "is-focus" : ""}">iPhoneだけで仕事の型を覚えるアプリ</div>
        <div class="mock-canva-download ${focus === "download" ? "is-focus" : ""}">⬇ 画像として保存</div>
      </div>
      ${chips}
      <p class="mock-caption">Canvaは、作品を一枚の見せるカードに包装する道具。</p>
    `;
  }

  return `<div class="panel">このステップの模型はまだ準備中です。</div>`;
}

function nextStoryStep() {
  if (!currentStoryKey) return;
  const story = operationStories[currentStoryKey];
  if (currentStoryIndex >= story.steps.length - 1) {
    currentStoryIndex = 0;
  } else {
    currentStoryIndex += 1;
  }
  renderStory();
}

function prevStoryStep() {
  if (!currentStoryKey) return;
  currentStoryIndex = Math.max(0, currentStoryIndex - 1);
  renderStory();
}

function closeStory() {
  currentStoryKey = null;
  currentStoryIndex = 0;
  switchView("viewGear");
}

function goToRoadmapScroll(targetId) {
  const target = document.getElementById(targetId) || document.querySelector(`.${targetId}`);
  if (!target) {
    showToast("見学スライドへ進みます");
    return;
  }
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("見学スライドへ移動");
}

function goToRoadmapStep(viewId) {
  const view = document.getElementById(viewId);
  if (!view) {
    showToast("まだ未実装のタブです");
    return;
  }
  switchView(viewId);
  window.setTimeout(() => {
    view.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
  const label = document.querySelector(`.tab[data-view="${viewId}"] span`)?.textContent || "対応";
  showToast(`${label}タブへ移動`);
}

function switchView(viewId) {
  window.currentActiveViewId = viewId;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === viewId));
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));

  if (viewId === "viewTour") renderTour();
  if (viewId === "viewShare") renderShare();
  if (viewId === "viewGear") { renderFilters(); renderGear(); }
  if (viewId === "viewToday") renderConditions();
  if (viewId === "viewDelivery") renderDelivery();
  if (viewId === "viewPrompt") renderDirector();
  if (viewId === "viewStory") renderStory();
}

function goToTourRelatedGear() {
  const slide = tourSlides[currentTourIndex];
  const firstGearId = slide.relatedGearIds.find(id => gears.some(g => g.id === id));
  switchView("viewGear");
  if (firstGearId) {
    const gear = gears.find(g => g.id === firstGearId);
    showToast(`${gear.name}の装備へ移動`);
  }
}


function renderFilters() {
  const row = document.getElementById("filterRow");
  row.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-chip ${category === currentFilter ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      currentFilter = category;
      renderFilters();
      renderGear();
    });
    row.appendChild(button);
  });
}

function renderGear() {
  const grid = document.getElementById("gearGrid");
  grid.innerHTML = "";
  const list = currentFilter === "全部" ? gears : gears.filter(g => g.category === currentFilter);
  list.forEach(gear => {
    const s = gearStatus(gear.id);
    const storyKey = storyKeyMap[gear.id];
    const storyButtonHTML = storyKey && operationStories[storyKey]
      ? `<button class="gear-story-button" type="button" data-story-key="${storyKey}">🎞️ 操作紙芝居を見る</button>`
      : "";
    const tempKey = getGearTemperatureKey(gear);
    const temp = temperatureLabels[tempKey] || temperatureLabels.watch;
    const adviceText = getGearAdviceText(gear);
    const card = document.createElement("article");
    card.className = "gear-card";
    card.innerHTML = `
      <div class="gear-head">
        <span class="gear-icon">${gear.icon}</span>
        <span class="pill">${gear.category}</span>
      </div>
      <div class="gear-temp-badge temp-${tempKey}">${temp.icon} ${temp.label}</div>
      <h3>${gear.name}</h3>
      <p>${gear.label}。${gear.summary}</p>
      <div class="gear-advice">${adviceText}</div>
      <div class="gear-meta">
        <span class="pill ${s.installed ? "done" : ""}">入れた</span>
        <span class="pill ${s.understood ? "done" : ""}">何に使うかわかった</span>
        <span class="pill ${s.used ? "done" : ""}">1回使った</span>
      </div>
      <div class="card-actions">
        <button type="button" data-open="${gear.id}">説明を見る</button>
        <button type="button" data-toggle="${gear.id}" data-key="understood" class="${s.understood ? "done" : ""}">${s.understood ? "理解済み" : "わかった"}</button>
        ${storyButtonHTML}
      </div>
    `;
    card.querySelector("[data-open]").addEventListener("click", () => openGearDialog(gear.id));
    card.querySelector("[data-toggle]").addEventListener("click", event => {
      setGearStatus(event.currentTarget.dataset.toggle, event.currentTarget.dataset.key);
    });
    const storyButton = card.querySelector("[data-story-key]");
    if (storyButton) {
      storyButton.addEventListener("click", event => openStory(event.currentTarget.dataset.storyKey));
    }
    grid.appendChild(card);
  });
}

function openGearDialog(id) {
  const gear = gears.find(g => g.id === id);
  const s = gearStatus(id);
  const dialog = document.getElementById("gearDialog");
  const content = document.getElementById("dialogContent");
  content.innerHTML = `
    <div class="dialog-inner">
      <div class="dialog-title">
        <span class="gear-icon">${gear.icon}</span>
        <div>
          <p class="eyebrow">${gear.category}</p>
          <h2>${gear.name}</h2>
          <p>${gear.label}</p>
        </div>
      </div>
      <div class="button-row">
        <button class="ghost-button" type="button" data-status="installed">${s.installed ? "入れた済み" : "入れた"}</button>
        <button class="ghost-button" type="button" data-status="understood">${s.understood ? "理解済み" : "何に使うかわかった"}</button>
        <button class="ghost-button" type="button" data-status="used">${s.used ? "使用済み" : "1回使った"}</button>
      </div>
      <section class="dialog-section">
        <h3>これは何？</h3>
        <p>${gear.summary}</p>
      </section>
      <section class="dialog-section">
        <h3>なぜ必要？</h3>
        <p>${gear.why}</p>
      </section>
      <section class="dialog-section">
        <h3>最初の一手</h3>
        <p>${gear.first}</p>
      </section>
      <section class="dialog-section">
        <h3>使用例</h3>
        <p>${gear.usecase}</p>
      </section>
      <section class="dialog-section">
        <h3>今日の小ミッション</h3>
        <p>${gear.mission}</p>
      </section>
      <section class="dialog-section">
        <h3>公式リンク</h3>
        <div class="dialog-links">
          ${gear.links.map(link => `<a href="${link[1]}" target="_blank" rel="noopener noreferrer">${link[0]} ↗</a>`).join("")}
        </div>
      </section>
      <section class="dialog-section">
        <h3>AIに聞く文</h3>
        <p>私は${gear.name}をフリーランス装備として覚えたいです。目的、最初に押す場所、1回目の練習、納品での使い方を短く分けてください。</p>
        <button class="primary-button" type="button" data-copy-gear="${gear.id}">この文をコピー</button>
      </section>
    </div>
  `;
  content.querySelectorAll("[data-status]").forEach(button => {
    button.addEventListener("click", event => {
      setGearStatus(id, event.currentTarget.dataset.status);
      openGearDialog(id);
    });
  });
  content.querySelector("[data-copy-gear]").addEventListener("click", () => {
    copyText(`私は${gear.name}をフリーランス装備として覚えたいです。目的、最初に押す場所、1回目の練習、納品での使い方を短く分けてください。`);
  });
  dialog.showModal();
}

function renderConditions() {
  const box = document.getElementById("conditionButtons");
  box.innerHTML = "";
  conditions.forEach(condition => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = selectedCondition === condition.id ? "active" : "";
    button.textContent = condition.label;
    button.addEventListener("click", () => {
      selectedCondition = condition.id;
      document.getElementById("todayOutputTitle").textContent = condition.title;
      document.getElementById("todayOutputText").textContent = condition.text;
      renderConditions();
    });
    box.appendChild(button);
  });
}



function renderDailyRouteSteps(routeKey) {
  const route = dailyRoutes[routeKey];
  const container = document.getElementById("dailyRouteSteps");
  if (!route || !container) return;

  document.querySelectorAll(".daily-route-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.route === routeKey);
  });

  container.innerHTML = "";

  const summary = document.createElement("div");
  summary.className = "daily-route-summary";
  summary.innerHTML = `<h4>${route.title}</h4><p>${route.description}</p>`;
  container.appendChild(summary);

  route.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "daily-step-card";

    const head = document.createElement("div");
    head.className = "daily-step-head";

    const num = document.createElement("span");
    num.className = "daily-step-num";
    num.textContent = String(index + 1);
    head.appendChild(num);

    const label = document.createElement("span");
    label.className = `daily-step-label label-${route.id}`;
    label.textContent = step.label;
    head.appendChild(label);

    card.appendChild(head);

    const title = document.createElement("p");
    title.className = "daily-step-title";
    title.textContent = step.text;
    card.appendChild(title);

    if (step.storyKey && operationStories[step.storyKey]) {
      const storyButton = document.createElement("button");
      storyButton.type = "button";
      storyButton.className = "daily-step-story-btn";
      storyButton.textContent = "紙芝居を見る";
      storyButton.addEventListener("click", () => openStory(step.storyKey));
      card.appendChild(storyButton);
    }

    container.appendChild(card);
  });
}

function bindDailyRouteButtons() {
  document.querySelectorAll(".daily-route-btn").forEach(button => {
    button.addEventListener("click", () => renderDailyRouteSteps(button.dataset.route));
  });
}



function updateDeliveryPreview() {
  const urlEl = document.getElementById("input-url");
  const oneWordEl = document.getElementById("input-oneword");
  const previewEl = document.getElementById("deliveryPreviewText");

  if (!urlEl || !oneWordEl || !previewEl) return;

  const getValue = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : "";
  };

  deliveryDraft.url = urlEl.value;
  deliveryDraft.oneWord = oneWordEl.value;
  deliveryDraft.features = [getValue("input-feature1"), getValue("input-feature2"), getValue("input-feature3")];
  deliveryDraft.updates = [getValue("input-update1"), getValue("input-update2"), getValue("input-update3")];
  deliveryDraft.focusPoints = [getValue("input-focus1"), getValue("input-focus2"), getValue("input-focus3")];
  deliveryDraft.nextQuestions = [getValue("input-next1"), getValue("input-next2"), getValue("input-next3")];

  previewEl.textContent = buildDeliveryDraftText(deliveryDraft, deliveryMode);
}

function safeDeliveryValue(value) {
  return value && value.trim() ? value.trim() : "（未入力）";
}

function safeDeliveryList(items) {
  const cleaned = items.filter(x => x && x.trim()).map(x => x.trim());
  return cleaned.length ? "- " + cleaned.join("\n- ") : "（未入力）";
}

function buildDeliveryDraftText(draft, mode = deliveryMode) {
  if (mode === "fix") return buildFixLetter(draft);
  if (mode === "share") return buildShareLetter(draft);
  return buildInitialLetter(draft);
}

function buildInitialLetter(draft) {
  return `お疲れ様です！制作物が確認できる状態になりましたので、お渡しいたします。

🌐 成果物のURL
${safeDeliveryValue(draft.url)}

📝 どんな作品？
${safeDeliveryValue(draft.oneWord)}

✨ 確認できること
${safeDeliveryList(draft.features)}

👀 特にチェックしてほしい場所
${safeDeliveryList(draft.focusPoints)}

🙋 次のステップ（ご相談）
${safeDeliveryList(draft.nextQuestions)}

お手すきの際にご確認をお願いいたします！`.trim();
}

function buildFixLetter(draft) {
  return `お疲れ様です！ご指摘いただいた箇所の修正が完了しましたので、再提出いたします。

🛠 今回直したところ（差分）
${safeDeliveryList(draft.updates)}

👀 修正後のチェック場所
${safeDeliveryList(draft.focusPoints)}

🌐 最新の確認URL
${safeDeliveryValue(draft.url)}

🙋 次のステップ（ご相談）
${safeDeliveryList(draft.nextQuestions)}

イメージ通りに仕上がっているか、ご確認いただけますと幸いです。よろしくお願いいたします！`.trim();
}

function buildShareLetter(draft) {
  return `お疲れ様です！現在の進捗を中間共有させていただきます。
※こちらはまだ制作途中のプレビューです。

🚧 現在の状態
${safeDeliveryValue(draft.oneWord)}

✨ 現段階でチェックできること
${safeDeliveryList(draft.features)}

🙋 次に進めたいこと・ご相談
${safeDeliveryList(draft.nextQuestions)}

🌐 現在の確認リンク
${safeDeliveryValue(draft.url)}

方向性にズレがないか、現段階で一度見ていただけますと幸いです。よろしくお願いいたします！`.trim();
}

function setDeliveryMode(mode) {
  deliveryMode = mode || "initial";

  document.querySelectorAll(".delivery-mode-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === deliveryMode);
  });

  updateDeliveryPreview();
}

function showInputView() {
  const inputView = document.getElementById("deliveryInputView");
  const previewView = document.getElementById("deliveryPreviewView");
  const inputBtn = document.getElementById("deliveryInputBtn");
  const previewBtn = document.getElementById("deliveryPreviewBtn");

  if (!inputView || !previewView || !inputBtn || !previewBtn) return;

  inputView.style.display = "block";
  previewView.style.display = "none";
  inputBtn.classList.add("active");
  previewBtn.classList.remove("active");
}

function showPreviewView() {
  const inputView = document.getElementById("deliveryInputView");
  const previewView = document.getElementById("deliveryPreviewView");
  const inputBtn = document.getElementById("deliveryInputBtn");
  const previewBtn = document.getElementById("deliveryPreviewBtn");

  if (!inputView || !previewView || !inputBtn || !previewBtn) return;

  updateDeliveryPreview();
  inputView.style.display = "none";
  previewView.style.display = "block";
  inputBtn.classList.remove("active");
  previewBtn.classList.add("active");
}

async function copyDeliveryDraftText() {
  updateDeliveryPreview();
  const text = buildDeliveryDraftText(deliveryDraft, deliveryMode);
  const statusEl = document.getElementById("deliveryDraftCopyStatus");
  try {
    await navigator.clipboard.writeText(text);
    if (statusEl) statusEl.textContent = "コピーしました";
    showToast("提出文をコピーした");
  } catch {
    copyText(text);
    if (statusEl) statusEl.textContent = "コピーしました";
  }
}

function bindDeliveryDraftButtons() {
  const inputBtn = document.getElementById("deliveryInputBtn");
  const previewBtn = document.getElementById("deliveryPreviewBtn");
  const copyBtn = document.getElementById("copyDeliveryDraftText");

  if (inputBtn) inputBtn.addEventListener("click", showInputView);
  if (previewBtn) previewBtn.addEventListener("click", showPreviewView);
  if (copyBtn) copyBtn.addEventListener("click", copyDeliveryDraftText);

  document.querySelectorAll(".delivery-mode-btn").forEach(button => {
    button.addEventListener("click", () => setDeliveryMode(button.dataset.mode));
  });

  setDeliveryMode(deliveryMode);
}

function renderDeliveryPack() {
  const pack = deliveryPack;
  const url = document.getElementById("delivery-url");
  const oneWord = document.getElementById("delivery-oneword");
  if (url) url.textContent = pack.url;
  if (oneWord) oneWord.textContent = pack.oneWord;

  renderDeliveryList("delivery-screenshots", pack.screenshots);
  renderDeliveryList("delivery-features", pack.features);
  renderDeliveryList("delivery-updates", pack.updates);
  renderDeliveryList("delivery-focus", pack.focusPoints);
  renderDeliveryList("delivery-next", pack.nextQuestions);
}

function renderDeliveryList(id, items) {
  const ul = document.getElementById(id);
  if (!ul) return;
  ul.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

function buildDeliveryText() {
  const pack = deliveryPack;
  return `【提出物】
フリーランス装備庫 v0.8

【公開URL】
${pack.url}

【一言説明】
${pack.oneWord}

【スクショ候補】
- ${pack.screenshots.join("\n- ")}

【できること】
- ${pack.features.join("\n- ")}

【今回の更新点】
- ${pack.updates.join("\n- ")}

【見てほしい場所】
- ${pack.focusPoints.join("\n- ")}

【次に相談したいこと】
- ${pack.nextQuestions.join("\n- ")}`.trim();
}

function renderDelivery() {
  const box = document.getElementById("deliveryChecklist");
  if (box) {
    box.innerHTML = "";
    deliveryItems.forEach(item => {
      const done = Boolean(state.delivery?.[item.id]);
      const row = document.createElement("article");
      row.className = `check-item ${done ? "done" : ""}`;
      row.innerHTML = `
        <div class="check-dot">✓</div>
        <div><h3>${item.title}</h3><p>${item.text}</p></div>
      `;
      row.addEventListener("click", () => {
        state.delivery = state.delivery || {};
        state.delivery[item.id] = !state.delivery[item.id];
        saveState();
        renderDelivery();
      });
      box.appendChild(row);
    });
  }
  renderDeliveryPack();
}

function currentMissionText() {
  const condition = conditions.find(c => c.id === selectedCondition);
  if (!condition) return "今日の地上条件をまだ選んでいません。まず iPhoneだけ、ChromePCあり、5分だけ、しんどい、などを1つ選びます。";
  return `今日の地上条件は「${condition.label}」。次の一手は「${condition.title}」。内容：${condition.text} この条件で、今から5分でできる手順を1、2、3で出してください。`;
}

async function copyDeliveryText() {
  const text = buildDeliveryText();
  const statusEl = document.getElementById("deliveryCopyStatus");
  try {
    await navigator.clipboard.writeText(text);
    if (statusEl) statusEl.textContent = "コピーしました";
    showToast("提出文をコピーした");
  } catch {
    copyText(text);
    if (statusEl) statusEl.textContent = "コピーしました";
  }
}

function copyAllGearText() {
  const next = gears.find(g => {
    const s = gearStatus(g.id);
    return !s.understood || !s.used;
  }) || gears[0];
  copyText(`今日の装備：${next.name}\n目的：${next.label}\n最初の一手：${next.first}\n小ミッション：${next.mission}`);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("コピーした");
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    showToast("コピーした");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1300);
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const viewId = tab.dataset.view;
      const alreadyActive = tab.classList.contains("active");
      switchView(viewId);
      if (alreadyActive) {
        const view = document.getElementById(viewId);
        if (view) view.scrollIntoView({ behavior: "smooth", block: "start" });
        showToast("現在のタブです");
      }
    });
  });
}

function bindButtons() {
  document.getElementById("tourPrevBtn").addEventListener("click", () => {
    currentTourIndex = Math.max(0, currentTourIndex - 1);
    renderTour();
  });
  document.getElementById("tourNextBtn").addEventListener("click", () => {
    currentTourIndex = currentTourIndex >= tourSlides.length - 1 ? 0 : currentTourIndex + 1;
    renderTour();
  });
  document.getElementById("tourGearBtn").addEventListener("click", goToTourRelatedGear);
  const storyPrev = document.getElementById("storyPrev");
  const storyNext = document.getElementById("storyNext");
  const storyBack = document.getElementById("storyBack");
  if (storyPrev) storyPrev.addEventListener("click", prevStoryStep);
  if (storyNext) storyNext.addEventListener("click", nextStoryStep);
  if (storyBack) storyBack.addEventListener("click", closeStory);

  document.getElementById("resetBtn").addEventListener("click", () => {
    state = { gear: {}, delivery: {}, missionsDone: 0 };
    saveState();
    renderGear();
    renderDelivery();
    showToast("リセットした");
  });
  document.getElementById("copyAllBtn").addEventListener("click", copyAllGearText);
  document.getElementById("copyMissionBtn").addEventListener("click", () => copyText(currentMissionText()));
  document.getElementById("completeMissionBtn").addEventListener("click", () => {
    state.missionsDone = Math.min(5, (state.missionsDone || 0) + 1);
    saveState();
    showToast("今日やった。勝ち");
  });
  document.getElementById("copyDeliveryBtn").addEventListener("click", copyDeliveryText);
  const copyDeliveryPackBtn = document.getElementById("copyDeliveryPackBtn");
  if (copyDeliveryPackBtn) copyDeliveryPackBtn.addEventListener("click", copyDeliveryText);
  bindDeliveryDraftButtons();
  document.querySelectorAll(".copy-prompt").forEach(button => {
    button.addEventListener("click", () => copyText(promptTemplates[button.dataset.prompt]));
  });
  bindDailyRouteButtons();
}

function init() {
  renderProgress();
  renderTour();
  renderShare();
  renderFilters();
  renderGear();
  renderConditions();
  renderDelivery();
  renderDirector();
  bindTabs();
  bindButtons();
}

init();
