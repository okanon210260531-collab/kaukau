const terminal = document.getElementById('terminalText');
const lines = [
  'SYSTEM CHECK...',
  'ACCESS: CHECKING',
  'STATUS: STANDBY',
  'MAIL ROUTE: kaukau@mirai.re',
  'REQUEST: WAITING',
  'SCREEN: PROP_MODE'
];
let tick = 0;
setInterval(() => {
  tick = (tick + 1) % 4;
  terminal.textContent = lines.join('\n') + '\n' + 'CHECKING' + '.'.repeat(tick);
}, 850);

function scrollToForm(){
  document.getElementById('formArea').scrollIntoView({behavior:'smooth'});
}

function showPropModal(message){
  document.getElementById('modalMessage').textContent = message;
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden','false');
}

function closeModal(){
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal').setAttribute('aria-hidden','true');
}

document.getElementById('modal').addEventListener('click', (event) => {
  if(event.target.id === 'modal') closeModal();
});

function formatAmount(value){
  const number = Number(value || 0);
  if(!number) return '未入力';
  return number.toLocaleString('ja-JP') + '円';
}

document.getElementById('propForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = formatAmount(document.getElementById('amountInput').value);
  const status = document.getElementById('statusBox');
  status.querySelector('p').textContent = `審査中：希望額 ${amount} / 送信先 kaukau@mirai.re を確認中…`;
  setTimeout(() => {
    status.querySelector('p').textContent = `受付完了：希望額 ${amount} / 確認待ち`;
    showPropModal(`仮申込を受け付けました。希望額：${amount} / 送信先：kaukau@mirai.re`);
  }, 900);
});
