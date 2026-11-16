const courses = [
  {
    title: "Cristianismo e mundo antigo",
    category: "HISTÓRIA DO CRISTIANISMO",
    teacher: "Prof.ª Helena Duarte",
    progress: 68,
    lessons: "8 de 12 aulas",
    color: "sage",
    initials: "HA",
    next: "A formação das primeiras comunidades"
  },
  {
    title: "Introdução à Filosofia da Religião",
    category: "FILOSOFIA",
    teacher: "Prof. André Nascimento",
    progress: 34,
    lessons: "4 de 12 aulas",
    color: "clay",
    initials: "FR",
    next: "Experiência religiosa e razão"
  },
  {
    title: "Sociologia da religião",
    category: "CIÊNCIAS DA RELIGIÃO",
    teacher: "Prof.ª Lúcia Campos",
    progress: 15,
    lessons: "2 de 10 aulas",
    color: "blue",
    initials: "SR",
    next: "Religião como fato social"
  }
];

const materials = [
  { title: "O sagrado e o profano", author: "Mircea Eliade · Capítulo 1", type: "E-book", category: "Filosofia", format: "PDF", tone: "sage" },
  { title: "As origens do cristianismo", author: "Paula Fredriksen · Artigo", type: "Artigo", category: "História", format: "PDF", tone: "clay" },
  { title: "Religião como sistema cultural", author: "Clifford Geertz · Leitura", type: "Leitura", category: "Sociologia", format: "PDF", tone: "blue" },
  { title: "Introdução aos estudos da religião", author: "João Décio Passos · Capítulo", type: "E-book", category: "Ciências da Religião", format: "PDF", tone: "gold" },
  { title: "Paulo entre judeus e gentios", author: "E. P. Sanders · Artigo", type: "Artigo", category: "Teologia", format: "PDF", tone: "rose" },
  { title: "O que é história intelectual?", author: "Dominick LaCapra · Ensaio", type: "Leitura", category: "História", format: "PDF", tone: "sage" }
];

const pages = {
  dashboard: "Visão geral",
  courses: "Meus cursos",
  library: "Biblioteca",
  assessments: "Avaliações",
  certificates: "Certificados",
  admin: "Administração",
  login: "Acessar a plataforma"
};

const view = document.querySelector("#view");
const globalSearch = document.querySelector("#globalSearch");
let activePage = "dashboard";
let activeRole = "Estudante";

function courseCard(course, index) {
  return `<article class="course-card">
    <div class="course-art ${course.color}"><span class="art-index">0${index + 1}</span><span class="art-initials">${course.initials}</span><span class="art-line"></span></div>
    <div class="course-details">
      <div class="eyebrow">${course.category}</div>
      <h3>${course.title}</h3>
      <p class="muted">${course.teacher}</p>
      <div class="progress-label"><span>Progresso</span><strong>${course.progress}%</strong></div>
      <div class="progress-track"><span style="width:${course.progress}%"></span></div>
      <div class="course-footer"><span>${course.lessons}</span><button class="text-button" data-action="continue-course" data-course="${course.title}">Continuar <span>→</span></button></div>
    </div>
  </article>`;
}

function dashboardPage() {
  const today = new Date();
  const nextLive = new Date(today);
  const nextMeeting = new Date(today);
  nextLive.setDate(today.getDate() + 5);
  nextMeeting.setDate(today.getDate() + 10);
  const formattedDate = date => ({
    day: date.toLocaleDateString("pt-BR", { day: "2-digit" }),
    month: date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "").toLocaleUpperCase("pt-BR")
  });
  const liveDate = formattedDate(nextLive);
  const meetingDate = formattedDate(nextMeeting);
  const todayLabel = today.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long", year: "numeric" }).toLocaleUpperCase("pt-BR");
  return `<div class="page-heading">
    <div><p class="overline">${todayLabel}</p><h1>Bom dia, Marina <span class="wave">✳</span></h1><p class="heading-subtitle">Um novo dia para ampliar perspectivas e aprofundar ideias.</p></div>
    <button class="button button-outline" data-page="courses">Explorar cursos <span>↗</span></button>
  </div>
  <section class="welcome-banner">
    <div class="banner-copy"><span class="banner-kicker">SEU PERCURSO DE ESTUDOS</span><h2>Aprender é também<br />fazer novas perguntas.</h2><p>Você está construindo um caminho próprio pelas humanidades.</p><button class="banner-link" data-page="courses">Acompanhar meu percurso <span>→</span></button></div>
    <div class="banner-art" aria-hidden="true"><div class="sun"></div><div class="arch arch-back"></div><div class="arch arch-front"></div><div class="banner-plant">✳</div><div class="banner-caption">ESTUDAR · PENSAR · DIALOGAR</div></div>
    <span class="banner-number">01 — 04</span>
  </section>
  <section class="section-block">
    <div class="section-heading"><div><p class="overline">EM SEU PERCURSO</p><h2>Seus cursos</h2></div><button class="subtle-link" data-page="courses">Ver todos <span>→</span></button></div>
    <div class="course-grid">${courses.map(courseCard).join("")}</div>
  </section>
  <section class="dashboard-bottom">
    <article class="panel live-panel"><div class="section-heading compact"><div><p class="overline">AGENDA ACADÊMICA</p><h2>Próximos encontros</h2></div><button class="icon-button small-icon" aria-label="Ver agenda">···</button></div>
      <div class="event-row"><div class="event-date"><strong>${liveDate.day}</strong><span>${liveDate.month}</span></div><div class="event-copy"><span class="event-tag"><i></i> AO VIVO</span><h3>Religião e modernidade</h3><p>Com Prof.ª Helena Duarte · Seminário aberto</p></div><div class="event-time">19:30 <span>Brasília</span></div></div>
      <div class="event-row"><div class="event-date"><strong>${meetingDate.day}</strong><span>${meetingDate.month}</span></div><div class="event-copy"><span class="event-tag quiet-tag">ENCONTRO</span><h3>Leitura orientada: Agostinho</h3><p>Com Prof. André Nascimento · Sala de estudos</p></div><div class="event-time">18:00 <span>Brasília</span></div></div>
    </article>
    <article class="panel notice-panel"><div class="section-heading compact"><div><p class="overline">DA COMUNIDADE</p><h2>Avisos</h2></div><button class="subtle-link" data-action="all-notices">Ver todos</button></div>
      <div class="notice-entry"><span class="notice-symbol">✳</span><div><h3>Novos títulos na biblioteca</h3><p>Confira a seleção de leituras sobre cristianismo antigo.</p><time>Hoje, 09:15</time></div></div>
      <div class="notice-entry"><span class="notice-symbol muted-symbol">↗</span><div><h3>Encontro de pesquisa em dezembro</h3><p>Inscrições abertas para a comunidade COETUS.</p><time>14 nov, 16:40</time></div></div>
    </article>
  </section>
  <footer class="page-footer"><span>COETUS · Escola do Nazareno</span><span>Uma comunidade de estudo e pesquisa.</span></footer>`;
}

function coursesPage() {
  return `<div class="page-heading"><div><p class="overline">FORMAÇÃO CONTINUADA</p><h1>Meus cursos</h1><p class="heading-subtitle">Aprofunde seus estudos no seu próprio ritmo.</p></div><button class="button button-primary" data-action="catalog">+ Explorar catálogo</button></div>
  <div class="stat-strip"><div><span class="stat-number">03</span><span class="stat-label">cursos em andamento</span></div><div><span class="stat-number">14</span><span class="stat-label">aulas concluídas</span></div><div><span class="stat-number">06h</span><span class="stat-label">de estudo neste mês</span></div><div class="stat-quote">“A educação não transforma o mundo. Educação muda pessoas.”<small>— Paulo Freire</small></div></div>
  <div class="section-heading course-list-heading"><div><p class="overline">CONTINUE DE ONDE PAROU</p><h2>Em andamento</h2></div><select class="select-control" aria-label="Filtrar cursos"><option>Todos os cursos</option><option>Em andamento</option><option>Concluídos</option></select></div>
  <div class="course-grid course-grid-full">${courses.map(courseCard).join("")}</div>
  <div class="callout-row"><div><span class="overline">PRÓXIMO PASSO</span><h3>Uma trilha de estudos para cada pergunta.</h3><p>Explore cursos criados por pesquisadores e professores das humanidades.</p></div><button class="button button-outline" data-action="catalog">Conhecer o catálogo <span>→</span></button></div>`;
}

function libraryPage() {
  return `<div class="page-heading"><div><p class="overline">ACERVO DE PESQUISA</p><h1>Biblioteca</h1><p class="heading-subtitle">Leituras para pensar o mundo em suas múltiplas dimensões.</p></div><button class="button button-outline" data-action="suggest-material">Sugerir material <span>＋</span></button></div>
  <section class="library-hero"><div><span class="banner-kicker">LEITURA EM DESTAQUE</span><h2>O que significa<br />estudar religião?</h2><p>Uma conversa com as perguntas, os métodos e as muitas possibilidades de um campo de estudos plural.</p><button class="banner-link" data-action="open-material">Conhecer o ensaio <span>→</span></button></div><div class="book-cover"><span>COETUS<br />CADERNOS</span><strong>Religião<br />em perspectiva</strong><small>ENSAIOS · Nº 04</small></div></section>
  <div class="library-toolbar"><div><p class="overline">EXPLORE O ACERVO</p><h2>Materiais de estudo</h2></div><div class="filter-pills" role="group" aria-label="Filtrar materiais"><button class="filter-pill selected" data-filter="Todos">Todos</button><button class="filter-pill" data-filter="História">História</button><button class="filter-pill" data-filter="Filosofia">Filosofia</button><button class="filter-pill" data-filter="Sociologia">Sociologia</button><button class="filter-pill" data-filter="Teologia">Teologia</button></div></div>
  <div class="material-grid" id="materialGrid">${materials.map(materialCard).join("")}</div>
  <div class="library-end"><span>Exibindo 6 de 128 materiais</span><button class="subtle-link" data-action="load-more">Carregar mais <span>↓</span></button></div>`;
}

function materialCard(material) {
  return `<article class="material-card" data-category="${material.category}"><div class="material-cover ${material.tone}"><span class="cover-type">${material.type}</span><span class="cover-glyph">${material.tone === "clay" ? "✳" : material.tone === "blue" ? "◌" : material.tone === "gold" ? "⌘" : "❧"}</span><span class="cover-footer">COETUS · BIBLIOTECA</span></div><div class="material-info"><span class="material-category">${material.category} <span>·</span> ${material.format}</span><h3>${material.title}</h3><p>${material.author}</p><button class="text-button" data-action="open-material">Acessar material <span>→</span></button></div></article>`;
}

function assessmentsPage() {
  return `<div class="page-heading"><div><p class="overline">APRENDIZAGEM E REFLEXÃO</p><h1>Avaliações</h1><p class="heading-subtitle">Acompanhe suas atividades e retome suas ideias.</p></div><span class="page-count">2 atividades pendentes</span></div>
  <div class="assessment-layout"><div class="assessment-list"><div class="section-heading compact"><div><p class="overline">SUAS ATIVIDADES</p><h2>Em andamento</h2></div><select class="select-control" aria-label="Filtrar avaliações"><option>Todas</option><option>Pendentes</option><option>Concluídas</option></select></div>
    <article class="assessment-card"><div class="assessment-icon sage">☷</div><div class="assessment-main"><span class="material-category">HISTÓRIA DO CRISTIANISMO · QUESTIONÁRIO</span><h3>Comunidades cristãs nos primeiros séculos</h3><p>8 questões de múltipla escolha · Correção automática</p><div class="assessment-meta"><span>◷ Prazo: 22 nov, 23:59</span><span class="status-pill status-open">Pendente</span></div></div><button class="button button-primary" data-action="start-assessment">Começar <span>→</span></button></article>
    <article class="assessment-card"><div class="assessment-icon clay">✎</div><div class="assessment-main"><span class="material-category">FILOSOFIA · QUESTÃO DISCURSIVA</span><h3>Experiência religiosa e conhecimento</h3><p>Ensaio breve · até 800 palavras</p><div class="assessment-meta"><span>◷ Prazo: 29 nov, 23:59</span><span class="status-pill status-open">Pendente</span></div></div><button class="button button-outline" data-action="start-assessment">Começar <span>→</span></button></article>
    <article class="assessment-card completed-card"><div class="assessment-icon blue">✓</div><div class="assessment-main"><span class="material-category">CIÊNCIAS DA RELIGIÃO · QUESTIONÁRIO</span><h3>O fenômeno religioso e suas abordagens</h3><p>Concluído em 12 nov · 9 de 10 acertos</p><div class="assessment-meta"><span>Resultado disponível</span><span class="status-pill status-done">Concluída</span></div></div><button class="subtle-link" data-action="view-result">Ver resultado <span>→</span></button></article>
  </div><aside class="assessment-aside"><span class="aside-mark">✳</span><p class="overline">UMA NOTA SOBRE AVALIAR</p><h3>Aprender não é apenas chegar a respostas.</h3><p>Nossas atividades são convites à reflexão, ao diálogo e à construção de argumentos.</p><div class="aside-rule"></div><span class="aside-small">DÚVIDAS SOBRE UMA ATIVIDADE?</span><button class="subtle-link" data-action="contact">Fale com seu professor <span>↗</span></button></aside></div>`;
}

function certificatesPage() {
  return `<div class="page-heading"><div><p class="overline">SUA TRAJETÓRIA ACADÊMICA</p><h1>Certificados</h1><p class="heading-subtitle">Registros de cada etapa concluída no seu percurso.</p></div></div>
  <section class="certificate-feature"><div class="certificate-copy"><span class="banner-kicker">UM PERCURSO EM CONSTRUÇÃO</span><h2>Cada estudo<br />abre novos caminhos.</h2><p>Ao concluir um curso, seu certificado ficará disponível aqui para consulta e compartilhamento.</p><button class="button button-light" data-page="courses">Ver meus cursos <span>→</span></button></div><div class="certificate-preview"><span class="preview-seal">C</span><span class="preview-top">ESCOLA DO NAZARENO · COETUS</span><span class="preview-title">Certificado</span><span class="preview-rule"></span><span class="preview-copy">de conclusão de curso</span><span class="preview-lines"></span><span class="preview-sign">COETUS</span></div></section>
  <div class="section-heading certificate-heading"><div><p class="overline">REGISTROS CONQUISTADOS</p><h2>Seus certificados</h2></div><span class="page-count">Nenhum certificado emitido</span></div>
  <div class="empty-state"><div class="empty-icon">◇</div><h3>Seu primeiro certificado está a caminho.</h3><p>Conclua um curso para que seu certificado apareça aqui.</p><button class="subtle-link" data-page="courses">Continuar aprendendo <span>→</span></button></div>`;
}

function adminPage() {
  return `<div class="page-heading"><div><p class="overline">ESPAÇO DE GESTÃO</p><h1>Administração</h1><p class="heading-subtitle">Acompanhe a comunidade e os conteúdos da COETUS.</p></div><div class="admin-page-actions"><label class="sr-only" for="roleSelector">Perfil de acesso</label><select class="select-control" id="roleSelector"><option value="Estudante">Estudante</option><option value="Administrador">Administrador</option><option value="Professor">Professor</option></select><button class="button button-primary" data-action="add-item">＋ Novo cadastro</button></div></div>
  <div class="admin-tabs" role="tablist"><button class="admin-tab active" data-admin-tab="overview">Visão geral</button><button class="admin-tab" data-admin-tab="users">Usuários</button><button class="admin-tab" data-admin-tab="courses">Cursos</button><button class="admin-tab" data-admin-tab="materials">Materiais</button><button class="admin-tab" data-admin-tab="assessments">Avaliações</button></div>
  <div class="admin-summary"><article><span class="summary-label">USUÁRIOS ATIVOS</span><strong>248</strong><span class="summary-note positive">↗ 12 este mês</span></article><article><span class="summary-label">CURSOS PUBLICADOS</span><strong>12</strong><span class="summary-note">3 em preparação</span></article><article><span class="summary-label">MATERIAIS NO ACERVO</span><strong>128</strong><span class="summary-note">Última atualização hoje</span></article><article><span class="summary-label">AVALIAÇÕES PENDENTES</span><strong>34</strong><span class="summary-note">Em 5 cursos</span></article></div>
  <section class="panel admin-table-panel"><div class="section-heading compact"><div><p class="overline">ATIVIDADE RECENTE</p><h2>Movimentações da plataforma</h2></div><button class="subtle-link" data-action="all-activity">Ver todas <span>→</span></button></div>
  <div class="table-wrap"><table><thead><tr><th>ATIVIDADE</th><th>RESPONSÁVEL</th><th>DATA</th><th>STATUS</th></tr></thead><tbody>
  <tr><td><span class="table-icon sage">▤</span><span class="table-primary">Novo curso publicado<small>Teologia pública: fé e esfera social</small></span></td><td>Helena Duarte<small>Professora</small></td><td>Hoje, 10:42</td><td><span class="status-pill status-done">Publicado</span></td></tr>
  <tr><td><span class="table-icon clay">▥</span><span class="table-primary">Material adicionado<small>Religião como sistema cultural</small></span></td><td>Lúcia Campos<small>Professora</small></td><td>Hoje, 09:18</td><td><span class="status-pill status-done">Disponível</span></td></tr>
  <tr><td><span class="table-icon blue">♙</span><span class="table-primary">Novo usuário cadastrado<small>Rafael Moreira · Estudante</small></span></td><td>Marina Alves<small>Administradora</small></td><td>Ontem, 16:05</td><td><span class="status-pill status-open">Aguardando</span></td></tr>
  <tr><td><span class="table-icon gold">☷</span><span class="table-primary">Avaliação criada<small>Leitura de fontes históricas</small></span></td><td>André Nascimento<small>Professor</small></td><td>Ontem, 14:32</td><td><span class="status-pill status-done">Publicada</span></td></tr>
  </tbody></table></div></section>
  <div class="admin-note"><span>ⓘ</span><p>Seu perfil atual tem acesso às ferramentas de gestão de usuários, cursos, materiais e avaliações.</p><button class="subtle-link" data-action="change-role">Alternar perfil <span>→</span></button></div>`;
}

function loginPage() {
  return `<div class="login-layout"><div class="login-intro"><a class="brand login-brand" href="#" data-page="dashboard"><span class="brand-mark">C</span><span class="brand-name">COETUS<small>ESCOLA DO NAZARENO</small></span></a><span class="banner-kicker">UM ESPAÇO DE ESTUDO E PESQUISA</span><h1>O conhecimento<br />se faz em comunidade.</h1><p>Entre para continuar seu percurso pelas humanidades, compartilhar ideias e descobrir novas perspectivas.</p><div class="login-quote">“O pensamento não é algo que se possui,<br />mas algo que se pratica.”<small>COETUS · ESCOLA DO NAZARENO</small></div><span class="login-decoration">✳</span></div><div class="login-form-wrap"><form class="login-form" id="loginForm"><p class="overline">BEM-VINDA DE VOLTA</p><h2>Acessar a plataforma</h2><p class="muted">Entre com os dados da sua conta COETUS.</p><label for="email">E-mail</label><input id="email" name="email" type="email" placeholder="voce@exemplo.com" autocomplete="email" required /><label for="password">Senha</label><div class="password-field"><input id="password" name="password" type="password" placeholder="Sua senha" autocomplete="current-password" required /><button type="button" class="password-toggle" aria-label="Mostrar senha">◉</button></div><button type="button" class="forgot-link" data-action="forgot-password">Esqueceu sua senha?</button><button class="button button-primary login-submit" type="submit">Entrar <span>→</span></button><div class="login-divider"><span>OU</span></div><p class="login-help">Ainda não faz parte da comunidade? <button type="button" data-action="contact">Fale conosco</button></p><button class="demo-link" type="button" data-page="dashboard">Voltar à demonstração <span>↗</span></button></form></div></div>`;
}

function render(page = activePage) {
  activePage = pages[page] ? page : "dashboard";
  view.innerHTML = ({
    dashboard: dashboardPage,
    courses: coursesPage,
    library: libraryPage,
    assessments: assessmentsPage,
    certificates: certificatesPage,
    admin: adminPage,
    login: loginPage
  })[activePage]();
  document.querySelector("#currentCrumb").textContent = pages[activePage];
  document.querySelectorAll(".nav-link[data-page]").forEach(link => link.classList.toggle("active", link.dataset.page === activePage));
  document.title = `${pages[activePage]} · COETUS`;
  const roleSelector = document.querySelector("#roleSelector");
  if (roleSelector) roleSelector.value = activeRole;
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#mobileScrim").classList.remove("visible");
  if (activePage === "library" && globalSearch.value.trim()) filterMaterials(globalSearch.value.trim());
}

function toast(message) {
  const region = document.querySelector("#toastRegion");
  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = message;
  region.append(item);
  setTimeout(() => item.remove(), 3200);
}

function filterMaterials(query) {
  const normalized = query.toLocaleLowerCase("pt-BR");
  document.querySelectorAll(".material-card").forEach(card => {
    card.hidden = !card.textContent.toLocaleLowerCase("pt-BR").includes(normalized);
  });
}

document.addEventListener("click", event => {
  const pageLink = event.target.closest("[data-page]");
  if (pageLink) {
    event.preventDefault();
    render(pageLink.dataset.page);
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    document.querySelectorAll(".filter-pill").forEach(pill => pill.classList.toggle("selected", pill === filter));
    document.querySelectorAll(".material-card").forEach(card => {
      card.hidden = filter.dataset.filter !== "Todos" && !card.dataset.category.toLocaleLowerCase("pt-BR").includes(filter.dataset.filter.toLocaleLowerCase("pt-BR"));
    });
    globalSearch.value = "";
    return;
  }

  const tab = event.target.closest("[data-admin-tab]");
  if (tab) {
    document.querySelectorAll(".admin-tab").forEach(item => item.classList.toggle("active", item === tab));
    toast(`Exibindo ${tab.textContent.toLocaleLowerCase("pt-BR")} da plataforma`);
    return;
  }

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action) {
    const messages = {
      "continue-course": "Sua aula foi aberta.",
      catalog: "O catálogo de cursos estará disponível em breve.",
      "suggest-material": "Envie sua sugestão para biblioteca@coetus.org.br.",
      "open-material": "O material selecionado foi aberto.",
      "load-more": "Você está vendo os materiais mais recentes.",
      "start-assessment": "A avaliação foi iniciada. Boa reflexão!",
      "view-result": "Você acertou 9 de 10 questões.",
      contact: "Escreva para contato@coetus.org.br.",
      "all-notices": "Você está em dia com os avisos da comunidade.",
      "all-activity": "Exibindo as movimentações mais recentes.",
      "add-item": "Selecione uma categoria: usuário, curso, material ou avaliação.",
      "change-role": "A área de gestão está disponível para os perfis de administrador e professor."
    };
    if (action === "forgot-password") {
      const email = document.querySelector("#email")?.value;
      toast(email ? `Se houver uma conta para ${email}, você receberá as instruções de recuperação.` : "Informe seu e-mail para receber as instruções de recuperação.");
    } else {
      toast(messages[action] || "Em breve, mais informações.");
    }
  }
});

globalSearch.addEventListener("input", () => {
  if (activePage !== "library") render("library");
  filterMaterials(globalSearch.value.trim());
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("open");
  document.querySelector("#mobileScrim").classList.toggle("visible");
});
document.querySelector("#mobileScrim").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.remove("open");
  document.querySelector("#mobileScrim").classList.remove("visible");
});
document.querySelector("#profileButton").addEventListener("click", () => render("login"));
document.querySelector("#noticeButton").addEventListener("click", () => toast("Você está em dia com os avisos da comunidade."));

document.addEventListener("click", event => {
  if (event.target.closest(".password-toggle")) {
    const password = document.querySelector("#password");
    const visible = password.type === "password";
    password.type = visible ? "text" : "password";
    event.target.closest(".password-toggle").setAttribute("aria-label", visible ? "Ocultar senha" : "Mostrar senha");
  }
});

document.addEventListener("submit", event => {
  if (event.target.id === "loginForm") {
    event.preventDefault();
    toast("A demonstração não valida credenciais. Acesse para conhecer a plataforma.");
  }
});

document.addEventListener("change", event => {
  if (event.target.id === "roleSelector") {
    activeRole = event.target.value;
    document.querySelector(".profile-copy small").textContent = activeRole;
    toast(`Perfil alterado para ${activeRole}.`);
  }
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    globalSearch.focus();
  }
  if (event.key === "Escape") {
    document.querySelector("#sidebar").classList.remove("open");
    document.querySelector("#mobileScrim").classList.remove("visible");
  }
});

render();
