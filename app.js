const vocabulary = [
  ['incident','noun','sự việc, vụ việc','Several unusual incidents were reported after the Arctic ice began to melt.','Một số sự việc bất thường đã được ghi nhận sau khi băng Bắc Cực bắt đầu tan.'],
  ['Arctic','noun / adjective','Bắc Cực; thuộc Bắc Cực','Scientists are studying how climate change affects Arctic communities.','Các nhà khoa học đang nghiên cứu cách biến đổi khí hậu ảnh hưởng đến các cộng đồng Bắc Cực.'],
  ['urgent','adjective','khẩn cấp','Reducing water pollution has become an urgent environmental issue.','Giảm ô nhiễm nguồn nước đã trở thành một vấn đề môi trường cấp bách.'],
  ['tough','adjective','khó khăn, khắc nghiệt','People in remote regions often live in tough conditions.','Người dân ở những vùng xa xôi thường sống trong điều kiện khắc nghiệt.'],
  ['combine A with B','verb pattern','kết hợp A với B','Researchers combine local knowledge with modern scientific methods.','Các nhà nghiên cứu kết hợp tri thức địa phương với phương pháp khoa học hiện đại.'],
  ['ancestor / ancestral','noun / adjective','tổ tiên; thuộc về tổ tiên','Many indigenous groups still protect the land of their ancestors.','Nhiều cộng đồng bản địa vẫn bảo vệ vùng đất của tổ tiên mình.'],
  ['out of the question','phrase','không thể xảy ra, không thể chấp nhận','In this frozen region, growing crops is out of the question.','Ở vùng băng giá này, việc trồng cây là điều không thể.'],
  ['exploit','verb','khai thác','Early settlers exploited natural resources in order to survive.','Những người định cư đầu tiên khai thác tài nguyên thiên nhiên để sinh tồn.'],
  ['obtain / gain','verb','giành được, thu được','The study obtained useful data from several coastal villages.','Nghiên cứu đã thu được dữ liệu hữu ích từ một số làng ven biển.'],
  ['adapt to something','verb pattern','thích nghi với điều gì','Animals must adapt to rapid changes in their habitat.','Động vật phải thích nghi với những thay đổi nhanh chóng trong môi trường sống.'],
  ['emerge','verb','nổi lên, xuất hiện','New health problems may emerge as the climate becomes warmer.','Các vấn đề sức khỏe mới có thể xuất hiện khi khí hậu ấm lên.'],
  ['harsh','adjective','khắc nghiệt','Few plants can survive the harsh Arctic winter.','Rất ít loài thực vật có thể sống sót qua mùa đông Bắc Cực khắc nghiệt.'],
  ['abandon','verb','từ bỏ, rời bỏ','Many families abandoned their traditional way of life.','Nhiều gia đình đã từ bỏ lối sống truyền thống của họ.'],
  ['indigenous / native','adjective','bản địa','Indigenous knowledge can provide valuable evidence for climate research.','Tri thức bản địa có thể cung cấp bằng chứng quý giá cho nghiên cứu khí hậu.'],
  ['scarce / scarcity','adjective / noun','khan hiếm; sự khan hiếm','Fresh food is scarce in isolated northern communities.','Thực phẩm tươi rất khan hiếm tại các cộng đồng biệt lập ở phương Bắc.'],
  ['state / state benefit','noun','nhà nước; trợ cấp nhà nước','Some households depend on state benefits when jobs are limited.','Một số hộ gia đình phụ thuộc vào trợ cấp nhà nước khi cơ hội việc làm hạn chế.'],
  ['depression','noun','trầm cảm, suy sụp','Social isolation may increase the risk of depression among young people.','Sự cô lập xã hội có thể làm tăng nguy cơ trầm cảm ở người trẻ.'],
  ['ignore','verb','phớt lờ','Governments should not ignore the concerns of local communities.','Chính phủ không nên phớt lờ những mối quan tâm của cộng đồng địa phương.'],
  ['consult','verb','tham khảo, tham vấn','Scientists consulted local residents before beginning the project.','Các nhà khoa học đã tham vấn người dân địa phương trước khi bắt đầu dự án.'],
  ['permit / allow / permission','verb / noun','cho phép; sự cho phép','The new policy allows researchers to collect data with community permission.','Chính sách mới cho phép các nhà nghiên cứu thu thập dữ liệu khi có sự đồng ý của cộng đồng.'],
  ['determined / determination','adjective / noun','quyết tâm; sự quyết tâm','The community is determined to protect its traditional culture.','Cộng đồng quyết tâm bảo vệ văn hóa truyền thống của mình.'],
  ['resolve / solve','verb','giải quyết','International cooperation is needed to resolve environmental problems.','Cần có hợp tác quốc tế để giải quyết các vấn đề môi trường.'],
  ['consequence / result','noun','hậu quả; kết quả','Rising sea levels are a serious consequence of global warming.','Mực nước biển dâng là một hậu quả nghiêm trọng của hiện tượng nóng lên toàn cầu.'],
  ['alter / alternative','verb / adjective / noun','thay đổi; thay thế; lựa chọn thay thế','Climate change may alter migration patterns and force people to find alternative food sources.','Biến đổi khí hậu có thể làm thay đổi quy luật di cư và buộc con người tìm nguồn thực phẩm thay thế.'],
  ['vital / essential','adjective','thiết yếu','Clean water is vital for public health.','Nước sạch thiết yếu đối với sức khỏe cộng đồng.'],
  ['absent / absence; present / presence','word family','vắng mặt; sự vắng mặt; có mặt; sự hiện diện','The absence of reliable data makes accurate predictions difficult.','Việc thiếu dữ liệu đáng tin cậy khiến các dự đoán chính xác trở nên khó khăn.'],
  ['remain','verb','vẫn, tiếp tục không thay đổi','Although more studies have been conducted, several questions remain unanswered.','Mặc dù đã có thêm nhiều nghiên cứu, một số câu hỏi vẫn chưa được giải đáp.']
];

const preparationVocabulary = [
  ['obstacle / barrier','noun','rào cản, chướng ngại vật','Lack of transport is a major obstacle to economic development.','Thiếu phương tiện giao thông là một trở ngại lớn đối với phát triển kinh tế.'],
  ['exploit','verb','khai thác','Early communities exploited natural resources to survive.','Các cộng đồng thời kỳ đầu đã khai thác tài nguyên thiên nhiên để sinh tồn.'],
  ['given + clause','linking structure','vì, do; xét rằng','Given that sea ice is melting rapidly, governments must act now.','Xét rằng băng biển đang tan nhanh, các chính phủ phải hành động ngay.'],
  ['dominate','verb','áp đảo, thống trị','Large companies dominate the global market.','Các công ty lớn chi phối thị trường toàn cầu.'],
  ['prey / predator','noun','con mồi; động vật săn mồi','A decline in prey can affect predator populations.','Sự suy giảm con mồi có thể ảnh hưởng đến quần thể động vật săn mồi.'],
  ['manage to do / succeed in doing','verb pattern','thành công trong việc gì','Researchers managed to detect a weak signal.','Các nhà nghiên cứu đã phát hiện thành công một tín hiệu yếu.'],
  ['ancestor','noun','tổ tiên','Many traditions were passed down by their ancestors.','Nhiều truyền thống được tổ tiên của họ truyền lại.'],
  ['be exposed to / exposure','verb pattern / noun','tiếp xúc với; sự tiếp xúc','Children exposed to air pollution may develop breathing problems.','Trẻ em tiếp xúc với ô nhiễm không khí có thể gặp vấn đề về hô hấp.'],
  ['echo','noun','tiếng vọng','Bats use echoes to navigate dark caves.','Dơi sử dụng tiếng vọng để định hướng trong các hang tối.'],
  ['detect','verb','phát hiện ra','Special equipment can detect small changes in temperature.','Thiết bị chuyên dụng có thể phát hiện những thay đổi nhỏ về nhiệt độ.'],
  ['navigate','verb','xác định, điều khiển phương hướng','Dolphins may use sound to navigate in deep water.','Cá heo có thể dùng âm thanh để định hướng trong vùng nước sâu.'],
  ['principle','noun','nguyên tắc, quy luật','This scientific principle explains how sound travels.','Nguyên lý khoa học này giải thích cách âm thanh truyền đi.'],
  ['strike somebody / impress somebody','verb pattern','làm cho ai đó ấn tượng','The discovery struck researchers as highly significant.','Phát hiện này khiến các nhà nghiên cứu thấy nó có ý nghĩa đặc biệt quan trọng.'],
  ['apply / application','verb / noun','áp dụng; sự ứng dụng','This principle can be applied to many environmental problems.','Nguyên lý này có thể được áp dụng cho nhiều vấn đề môi trường.'],
  ['military','adjective','thuộc về quân đội','Sonar was first developed for military purposes.','Thiết bị định vị bằng sóng âm ban đầu được phát triển cho mục đích quân sự.'],
  ['submarine','noun','tàu ngầm','A submarine uses sonar to travel safely underwater.','Tàu ngầm sử dụng thiết bị định vị bằng sóng âm để di chuyển an toàn dưới nước.'],
  ['emerge','verb','nổi lên, xuất hiện','New theories emerged after further research.','Những lý thuyết mới xuất hiện sau các nghiên cứu sâu hơn.'],
  ['perceive / perception','verb / noun','nhận thức; sự nhận thức','Humans perceive depth by combining visual information from both eyes.','Con người nhận thức độ sâu bằng cách kết hợp thông tin thị giác từ cả hai mắt.'],
  ['limb','noun','tứ chi, chân hoặc tay','Some animals can regrow a damaged limb.','Một số động vật có thể tái tạo một chi bị tổn thương.'],
  ['term / concept','noun','thuật ngữ; khái niệm','Biodiversity is a term used to describe the variety of life.','Đa dạng sinh học là thuật ngữ dùng để mô tả sự phong phú của sự sống.'],
  ['sophisticated / complex','adjective','tinh vi, phức tạp','Whales have sophisticated communication systems.','Cá voi có những hệ thống giao tiếp tinh vi.'],
  ['pioneer','verb / noun','đi tiên phong; người tiên phong','The scientist pioneered a new method of underwater exploration.','Nhà khoa học đã đi tiên phong trong một phương pháp thám hiểm dưới nước mới.'],
  ['manufacture','verb','sản xuất','The factory manufactures electronic equipment.','Nhà máy sản xuất thiết bị điện tử.'],
  ['consume / consumption','verb / noun','tiêu thụ; sự tiêu dùng','Modern households consume large amounts of energy.','Các hộ gia đình hiện đại tiêu thụ lượng năng lượng lớn.'],
  ['accurate / inaccurate / inaccuracy','word family','chính xác; không chính xác; sự thiếu chính xác','Accurate measurements are essential because even minor inaccuracy can affect results.','Phép đo chính xác rất quan trọng vì ngay cả sai số nhỏ cũng có thể ảnh hưởng đến kết quả.'],
  ['visual / vision','adjective / noun','thuộc hình ảnh; thị giác, tầm nhìn','Visual information strongly influences human perception and vision.','Thông tin hình ảnh ảnh hưởng mạnh đến nhận thức và thị giác của con người.'],
  ['theory','noun','lý thuyết, giả thuyết','A scientific theory must be supported by reliable evidence.','Một lý thuyết khoa học phải được chứng minh bằng bằng chứng đáng tin cậy.']
];

const tabButtons=[...document.querySelectorAll('.tab-button')];
const tabPanels=[...document.querySelectorAll('.tab-panel')];
const answerTabButton=document.querySelector('.tab-button[data-tab="answers"]');
let answersUnlocked=false;
function openTab(name,scroll=true){
  if(name==='answers'&&!answersUnlocked) name='practice';
  tabButtons.forEach(button=>button.classList.toggle('active',button.dataset.tab===name));
  tabPanels.forEach(panel=>{
    const isActive=panel.dataset.panel===name;
    panel.hidden=!isActive; panel.classList.toggle('active',isActive);
  });
  history.replaceState(null,'',`#${name}`);
  if(scroll) document.querySelector('.sticky-nav').scrollIntoView({behavior:'smooth',block:'start'});
}
tabButtons.forEach(button=>button.addEventListener('click',()=>openTab(button.dataset.tab)));
document.querySelector('.hero .primary').addEventListener('click',event=>{event.preventDefault();openTab('method')});
const initialTab=location.hash.slice(1);
if(tabButtons.some(button=>button.dataset.tab===initialTab)) openTab(initialTab,false);

const headings = ['i','ii','iii','iv','v','vi','vii','viii','ix'];
const passages = [
  {id:'A',answer:'viii',text:`Unusual incidents are being reported across the Arctic. Inuit families going off on snowmobiles to prepare their summer hunting camps have found themselves cut off from home by a sea of mud, following early thaws. There are reports of igloos losing their insulating properties as the snow drips and refreezes, of lakes draining into the sea as permafrost melts, and sea ice breaking up earlier than usual, carrying seals beyond the reach of hunters. Climate change may still be a rather abstract idea to most of us, but in the Arctic, it is already having dramatic effects.`},
  {id:'B',answer:'i',text:`For the Inuit the problem is urgent. They live in precarious balance with one of the toughest environments on earth. Climate change, whatever its causes, is a direct threat to their way of life. Nobody knows the Arctic as well as the locals, which is why they are not content simply to stand back and let outside experts tell them what's happening. They believe their best hope of survival lies in combining their ancestral knowledge with the best of modern science.`},
  {id:'C',answer:'vi',text:`The Canadian Arctic is a vast, treeless polar desert that's covered with snow for most of the year. Venture into this terrain and you get some idea of the hardships facing anyone who calls this home. Farming is out of the question and nature offers meagre pickings. Humans first settled in the Arctic 4,500 years ago, surviving by exploiting sea mammals and fish.`},
  {id:'D',answer:'iii',text:`Life for the descendants of the Thule people is still harsh. Nunavut is 1.9 million square kilometres of rock and ice, and a handful of islands around the North Pole. Over the past 40 years, most have abandoned their nomadic ways and settled in isolated communities, but they still rely heavily on nature to provide food and clothing. Provisions in local shops have to be flown into Nunavut or brought by supply ship during the few ice-free weeks of summer. Imported meat is costly, economic opportunities are scarce, and state benefits are often their only income.`},
  {id:'E',answer:'vii',text:`While the Inuit may not actually starve if hunting and trapping are curtailed by climate change, there has certainly been an impact on people's health. Obesity, heart disease and diabetes are beginning to appear in a people for whom these have never before been problems. There has been a crisis of identity as traditional skills have begun to disappear. In Nunavut's “igloo and email” society, where adults were born in igloos but many children have never been out on the land, there's a high incidence of depression.`},
  {id:'F',answer:'iv',text:`With so much at stake, the Inuit are determined to play a key role in teasing out the mysteries of climate change in the Arctic. Their wealth of traditional knowledge is vital to the task. In the early days, scientists ignored us when they came up here to study anything. But in recent years Inuit Qaujimajatuqangit, or IQ, has had much more credibility and weight. It is now a requirement for researchers to consult the communities and reflect their most important concerns.`},
  {id:'G',answer:'ii',text:`Some scientists doubt the value of traditional knowledge because the occupation of the Arctic doesn't go back far enough. Others point out that the first weather stations in the far north date back just 50 years. There are still huge gaps in our environmental knowledge, and despite the scientific onslaught, many predictions are no more than best guesses. IQ could help to bridge the gap and resolve the tremendous uncertainty about how much of what we're seeing is natural capriciousness and how much is the consequence of human activity.`}
];

const explanations = {
  A:{code:'viii',title:'Alarm caused by unprecedented events in the Arctic.',simplify:'Unusual incidents are being reported; climate change is already having dramatic effects in the Arctic.',connection:'Các câu sau cùng hướng và lần lượt bổ sung ví dụ cho câu mở đoạn: tan băng sớm, bùn chia cắt đường đi, igloo mất khả năng cách nhiệt, hồ thoát ra biển và băng biển vỡ sớm.',match:'“unusual incidents” khớp với “unprecedented events”; chuỗi “dramatic effects” tạo sắc thái cảnh báo “alarm”. Vì vậy viii bao trùm toàn đoạn.'},
  B:{code:'i',title:'The reaction of the Inuit community to climate change.',simplify:'The problem is urgent; the Inuit are not content to stand back; their best hope lies in combining ancestral knowledge with modern science.',connection:'Đoạn đi từ mối đe dọa trực tiếp đến cách người Inuit phản ứng. Cụm “which is why” nối nguyên nhân với phản ứng chủ động của cộng đồng.',match:'“not content simply to stand back” và “best hope of survival” diễn đạt phản ứng của cộng đồng trước biến đổi khí hậu. Vì vậy i là ý bao trùm.'},
  C:{code:'vi',title:'A difficult landscape.',simplify:'The Canadian Arctic is a vast, treeless polar desert; farming is impossible and nature offers little food.',connection:'Mọi câu đều phát triển cùng một ý: địa hình khắc nghiệt và những khó khăn mà môi trường này gây ra cho người sinh sống tại đây.',match:'“vast, treeless polar desert”, “hardships”, “out of the question” và “meagre pickings” cùng paraphrase cho một cảnh quan khó sống. Vì vậy vi phù hợp.'},
  D:{code:'iii',title:'Alternative sources of essential supplies.',simplify:'Settled communities still need food and clothing; provisions must be flown in or brought by ship, while imported meat and state benefits support daily life.',connection:'Đoạn chuyển từ nguồn sống truyền thống sang các nguồn thay thế cần thiết khi người Inuit sống định cư trong những cộng đồng biệt lập.',match:'“provisions ... flown”, “supply ship”, “imported meat” và “state benefits” đều là alternative sources của essential supplies. Vì vậy iii đúng.'},
  E:{code:'vii',title:'Negative effects on well-being.',simplify:'Climate change has affected people’s health and identity; physical diseases and depression are increasing.',connection:'Các ý cùng hướng, bổ sung hai nhóm hậu quả: sức khỏe thể chất và sức khỏe tinh thần, bản sắc.',match:'“impact on health”, “obesity, heart disease and diabetes”, “crisis of identity” và “depression” khớp trực tiếp với negative effects on well-being. Vì vậy vii đúng.'},
  F:{code:'iv',title:'Respect for Inuit opinion grows.',simplify:'Scientists ignored the Inuit in the past, but Inuit knowledge now has more credibility and researchers must consult the community.',connection:'Từ “But in recent years” tạo quan hệ tương phản giữa quá khứ bị phớt lờ và hiện tại được công nhận, tham vấn.',match:'“more credibility and weight” cùng yêu cầu “consult the communities” paraphrase cho sự tôn trọng ý kiến Inuit ngày càng tăng. Vì vậy iv đúng.'},
  G:{code:'ii',title:'Understanding of climate change remains limited.',simplify:'Historical records are short; there are huge gaps in knowledge; many predictions are only best guesses and uncertainty remains.',connection:'Dù mở đầu bằng hai quan điểm khác nhau, các câu đều quy về một kết luận chung: bằng chứng hiện có chưa đủ để hiểu chắc chắn nguyên nhân biến đổi.',match:'“huge gaps”, “best guesses” và “tremendous uncertainty” khớp với understanding remains limited. Vì vậy ii đúng.'}
};

function speak(text,onend){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text.replaceAll(' / ','; ').replaceAll(' A ',' A ').replaceAll(' B ',' B '));
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices.find(v => /en-GB/i.test(v.lang) && /female|sonia|libby|serena|susan/i.test(v.name)) || voices.find(v => /en-GB/i.test(v.lang)) || null;
  utterance.lang = 'en-GB'; utterance.rate = .76; utterance.pitch = 1;
  if(onend) utterance.onend=onend;
  speechSynthesis.speak(utterance);
}

function speakWordAndExample(word,example){
  speak(word,()=>{
    const sentence=new SpeechSynthesisUtterance(example);
    const voices=speechSynthesis.getVoices();
    sentence.voice=voices.find(v=>/en-GB/i.test(v.lang))||null;
    sentence.lang='en-GB'; sentence.rate=.82; sentence.pitch=1;
    speechSynthesis.speak(sentence);
  });
}

function setupVocabularyPlayer(data, ids, numberOffset=1){
  let activeIndex=0;
  let teachTimer=null;
  const grid=document.getElementById(ids.grid);
  const cards=[];

  function setActiveWord(index,play=true){
    activeIndex=index;
    const [word,type,meaning,example,exampleMeaning]=data[index];
    const displayNumber=numberOffset+index;
    const finalNumber=numberOffset+data.length-1;
    document.getElementById(ids.index).textContent=`${String(displayNumber).padStart(2,'0')} / ${String(finalNumber).padStart(2,'0')}`;
    document.getElementById(ids.word).textContent=word;
    document.getElementById(ids.type).textContent=type;
    document.getElementById(ids.meaning).textContent=meaning;
    document.getElementById(ids.example).textContent=example;
    document.getElementById(ids.exampleMeaning).textContent=exampleMeaning;
    cards.forEach((card,cardIndex)=>card.classList.toggle('active',cardIndex===index));
    if(play) speakWordAndExample(word,example);
  }

  data.forEach(([word,type,meaning,example],index)=>{
    const card=document.createElement('article');
    card.className='vocab-card';
    card.innerHTML=`<span class="num">${String(numberOffset+index).padStart(2,'0')}</span><div><strong>${word}</strong><small>${type} · ${meaning}</small><p>${example}</p></div><button aria-label="Nghe ${word}">▶</button>`;
    card.addEventListener('click',()=>setActiveWord(index));
    cards.push(card);
    grid.appendChild(card);
  });

  document.getElementById(ids.replay).addEventListener('click',()=>speak(data[activeIndex][0]));
  document.getElementById(ids.auto).addEventListener('click',()=>{
    clearInterval(teachTimer);
    setActiveWord(activeIndex);
    teachTimer=setInterval(()=>setActiveWord((activeIndex+1)%data.length),8500);
  });
  document.getElementById(ids.stop).addEventListener('click',()=>{
    clearInterval(teachTimer);
    speechSynthesis.cancel();
  });
  setActiveWord(0,false);
}

setupVocabularyPlayer(vocabulary,{
  grid:'vocabGrid',index:'wordIndex',word:'activeWord',type:'activeType',meaning:'activeMeaning',
  example:'activeExample',exampleMeaning:'activeExampleMeaning',replay:'replayWord',auto:'autoTeach',stop:'stopTeach'
});
setupVocabularyPlayer(preparationVocabulary,{
  grid:'prepVocabGrid',index:'prepWordIndex',word:'prepActiveWord',type:'prepActiveType',meaning:'prepActiveMeaning',
  example:'prepActiveExample',exampleMeaning:'prepActiveExampleMeaning',replay:'prepReplayWord',auto:'prepAutoTeach',stop:'prepStopTeach'
},28);

document.getElementById('goToPractice').addEventListener('click',()=>openTab('practice'));

const passageEl=document.getElementById('passage');
const readingText=document.getElementById('readingText');
passages.forEach((p,index)=>{
  const readingParagraph=document.createElement('section');
  readingParagraph.className='reading-paragraph';
  readingParagraph.innerHTML=`<b>${p.id}</b><p>${p.text}</p>`;
  readingText.appendChild(readingParagraph);

  const article=document.createElement('article'); article.className='paragraph-card'; article.dataset.id=p.id;
  article.innerHTML=`<div class="question-number">${index+1}</div><div class="select-wrap"><label for="answer-${p.id}">Paragraph ${p.id}</label><select id="answer-${p.id}"><option value="">Select a heading</option>${headings.map(h=>`<option value="${h}">${h}</option>`).join('')}</select><div class="inline-feedback" aria-live="polite"></div></div>`;
  passageEl.appendChild(article);
});

function selectionBelongsToReading(range){
  const start=range.startContainer.nodeType===Node.TEXT_NODE?range.startContainer.parentElement:range.startContainer;
  const end=range.endContainer.nodeType===Node.TEXT_NODE?range.endContainer.parentElement:range.endContainer;
  return readingText.contains(start)&&readingText.contains(end);
}

function highlightReadingSelection(){
  const selection=window.getSelection();
  if(!selection||selection.isCollapsed||!selection.rangeCount) return;
  const range=selection.getRangeAt(0);
  if(!selectionBelongsToReading(range)) return;

  const textNodes=[];
  const walker=document.createTreeWalker(readingText,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    if(!node.nodeValue.trim()||node.parentElement.closest('.reading-highlight')) continue;
    try{ if(range.intersectsNode(node)) textNodes.push(node); }catch(_error){}
  }

  textNodes.reverse().forEach(textNode=>{
    let start=0,end=textNode.nodeValue.length;
    if(textNode===range.startContainer) start=range.startOffset;
    if(textNode===range.endContainer) end=range.endOffset;
    if(start>=end) return;
    const selectedRange=document.createRange();
    selectedRange.setStart(textNode,start);
    selectedRange.setEnd(textNode,end);
    const mark=document.createElement('mark');
    mark.className='reading-highlight';
    mark.dataset.created=String(Date.now());
    selectedRange.surroundContents(mark);
  });
  selection.removeAllRanges();
}

readingText.addEventListener('mouseup',()=>setTimeout(highlightReadingSelection,0));
readingText.addEventListener('dblclick',()=>setTimeout(highlightReadingSelection,0));
readingText.addEventListener('touchend',()=>setTimeout(highlightReadingSelection,350),{passive:true});
readingText.addEventListener('click',event=>{
  const mark=event.target.closest('.reading-highlight');
  if(!mark||Date.now()-Number(mark.dataset.created||0)<350) return;
  mark.replaceWith(document.createTextNode(mark.textContent));
  readingText.normalize();
});
document.getElementById('clearHighlights').addEventListener('click',()=>{
  readingText.querySelectorAll('.reading-highlight').forEach(mark=>mark.replaceWith(document.createTextNode(mark.textContent)));
  readingText.normalize();
  window.getSelection()?.removeAllRanges();
});

function updateAnswered(){
  const n=[...document.querySelectorAll('.paragraph-card select')].filter(x=>x.value).length;
  document.getElementById('answeredCount').textContent=`${n} / 7`;
  document.getElementById('answeredTop').textContent=`${n} of 7 answered`;
}
document.querySelectorAll('.paragraph-card select').forEach(s=>s.addEventListener('change',updateAnswered));

const answerGrid=document.getElementById('answerGrid');
function explanationMarkup(id){
  const item=explanations[id];
  return `<div class="explanation-steps"><p><b>1. SIMPLIFY</b>${item.simplify}</p><p><b>2. READ CONNECTION</b>${item.connection}</p><p><b>3. ĐỐI CHIẾU PARAPHRASE</b>${item.match}</p></div>`;
}

Object.entries(explanations).forEach(([id,item])=>{
  const card=document.createElement('article');card.className='answer-card';
  card.innerHTML=`<span class="answer-code">ĐOẠN ${id} · ${item.code}</span><h3>${item.title}</h3>${explanationMarkup(id)}`;answerGrid.appendChild(card);
});

document.getElementById('gradeAnswers').addEventListener('click',()=>{
  const unanswered=passages.filter(p=>!document.querySelector(`[data-id="${p.id}"] select`).value);
  const message=document.getElementById('scoreMessage');
  if(unanswered.length){
    document.querySelectorAll('.paragraph-card').forEach(card=>card.classList.toggle('unanswered',!card.querySelector('select').value));
    message.textContent=`Em cần hoàn thành đủ 7 câu trước khi xem đáp án. Còn ${unanswered.length} câu chưa chọn: ${unanswered.map(p=>`đoạn ${p.id}`).join(', ')}.`;
    message.classList.add('warning-message');
    return;
  }

  let score=0;
  passages.forEach(p=>{
    const card=document.querySelector(`[data-id="${p.id}"]`), value=card.querySelector('select').value;
    const feedback=card.querySelector('.inline-feedback');
    card.classList.remove('correct','incorrect','unanswered');
    if(value===p.answer){
      score++; card.classList.add('correct');
      feedback.innerHTML=`<strong>Đúng · ${p.answer}</strong>${explanationMarkup(p.id)}`;
    } else {
      card.classList.add('incorrect');
      feedback.innerHTML=`<strong>Chưa đúng · Em chọn ${value} · Đáp án ${p.answer}</strong>${explanationMarkup(p.id)}`;
    }
  });
  answersUnlocked=true;
  answerTabButton.disabled=false;
  answerTabButton.classList.remove('locked');
  answerTabButton.title='';
  message.classList.remove('warning-message');
  message.textContent=`Em đã hoàn thành đủ 7 câu. Kết quả: ${score}/7. Đáp án và lời giải theo SIMPLIFY → READ CONNECTION → đối chiếu paraphrase đã được mở.`;
});
