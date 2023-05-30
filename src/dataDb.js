export const dataDb = {
  category: [
    {
      id: 100101,
      name: "SFGROUP/ALIMENTOS  /HARINAS_MEZCLAS/HARINAS",
    },
    {
      id: 100102,
      name: "SFGROUP/ALIMENTOS  /HARINAS_MEZCLAS/MEZCLAS",
    },
    {
      id: 100201,
      name: "SFGROUP/ALIMENTOS  /GRANOS_CEREALES_GRANOLAS/GRANOS",
    },
    {
      id: 100202,
      name: "SFGROUP/ALIMENTOS  /GRANOS_CEREALES_GRANOLAS/CEREALES",
    },
    {
      id: 100203,
      name: "SFGROUP/ALIMENTOS  /GRANOS_CEREALES_GRANOLAS/GRANOLAS",
    },
  ],

  state: [
    { id: 1, name: "disponible" },
    { id: 2, name: "llegado" },
    { id: 3, name: "agotado" },
    { id: 4, name: "escaso" },
  ],

  icon: [
    { id: 1, name: "keto", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Keto_toqnlw.jpg" },
    { id: 2, name: "vegano", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Vegan_ycilwc.jpg" },
    { id: 3, name: "vegetariano", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Vegetarian_azjhdm.jpg" },
    { id: 4, name: "aptoDiabetico", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Diabetic_n9socu.jpg" },
    { id: 5, name: "altoProteina", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Protein_ae3btw.jpg" },
    { id: 6, name: "sinGluten", iconUrl:"https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684113637/calixto/Gluten_pppjih.jpg" },
  ],

  tax: [
    { id: 1, tax: 0 },
    { id: 2, tax: 5 },
    { id: 3, tax: 8 },
    { id: 4, tax: 16 },
    { id: 5, tax: 19 },
  ],

  provider: [
    { id: 1, name: "UP NUTRICIONAL FOOD SAS" },
    { id: 2, name: "EL DORADO COMEX SAS" },
    { id: 3, name: "ALIMENTOS EL DORADO SAS" },
    { id: 4, name: "ECOHOME" },
    { id: 5, name: "AMIRA SAS" },
  ],

  user: [
    { id: 1, name: "Mati", password: "qwer" },
    { id: 2, name: "Juanfer", password: "qwer" },
    { id: 3, name: "Gabriel", password: "qwer" },
    { id: 4, name: "Juanpa", password: "qwer" },
    { id: 5, name: "Obama", password: "qwer" },
  ],

  owner: [
    {
      id: 1,
      name: "sthemma",
      password: "qwer",
      plan: 50,
      logoOwner:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1684979344/Logo_huella_y52gwa.png",
    },
    {
      id: 2,
      name: "SF Group",
      password: "qwer",
      plan: 40,
      logoOwner:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681872234/calixto/SFGroup_rz9wyr.jpg",
    },
    {
      id: 3,
      name: "Grecco",
      password: "qwer",
      plan: 30,
      logoOwner:
        "https://candyjobs.com.co/wp-content/uploads/2020/10/0805-LOGO-GRECO.png",
    },
    { id: 4, name: "Punto 4", password: "qwer", plan: 20, logoOwner: "" },
    { id: 5, name: "Punto 5", password: "qwer", plan: 0, logoOwner: "" },
  ],

  portfolio: [
    { id: 1, name: "Bebidas" },
    { id: 2, name: "Aseo" },
    { id: 3, name: "Repuestos" },
    { id: 4, name: "Dulces" },
    { id: 5, name: "Alcoholicas" },
  ],

  product: [
    {
      codigo: 100001,
      nombre: "Choco-UP CM Natural 40g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829673/calixto/7709935980021_MEZCLA_ANTIOXIDANTE_X_150_GR_logwjh.png",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100002,
      nombre: "Choco-UP CM Chocolate 40g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829671/calixto/7709935980007_MEZCLA_ANTIOXIDANTE_X_300_GR_nhtsvp.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100003,
      nombre: "Choco-SnowUP 40g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829671/calixto/7709690590688_PISTACHO_AMERICANO_X_400_GR_dgf9eq.png",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100004,
      nombre: "Choco Snow UP 40g DP4",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829670/calixto/7708825351569_CACAO_MIX_X_300_GR_lx8b72.png",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100005,
      nombre: "Choco Chocolate UP 40g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829670/calixto/7709156992117_ARANDANO_X_500_GR_fc5pmn.png",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100006,
      nombre: "Choco-UP CM Natural 20g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829668/calixto/7709758576715_MEZCLA_PROTEINA_X_300_GR_jd2v58.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100007,
      nombre: "Choco-UP CM Chocolate 20g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829667/calixto/7709729637162_MEZCLA_PROTEINA_X_35_GR_vp38sl.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100008,
      nombre: "Choco-UP CM Snow 20g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829666/calixto/7709758576784_MEZCLA_TROPICAL_X_150_GR_v0hscx.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100009,
      nombre: "Cacao UP al 70% con Mani 20g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829665/calixto/7709729637193_TE_MATCHA_VANILLA_X_30_GR_pd8xkr.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
    {
      codigo: 100010,
      nombre: "Cacao UP al 70% con Almendra 20g",
      codigoBarras: 7709460000000,
      embalaje: 24,
      precioBase: 3833,
      prodUrl:
        "https://res.cloudinary.com/dbxsr9mfc/image/upload/v1681829664/calixto/7709675920615_TE_FLOR_DE_JAMAICA_20_SOBRES_X_26GR_ahaord.jpg",
      descripcion:
        "Chocolate oscuro al 58% de cacao con nueces de marañón. 1 barra de chocolate con nueces de marañón provee 360 calorías por lo que se recomienda consumir antes, durante o después de la actividad física para obtener o reponer energía. Recomendado para preparaciones en repostería. Tamaño por porción: 1/2 barra. Cacao 100% Colombiano. Chocolate sin azúcar adicionada. *No es bajo en calorías, ver información nutricional sobre contenido de calorías y azúcares.",
    },
  ],
};
