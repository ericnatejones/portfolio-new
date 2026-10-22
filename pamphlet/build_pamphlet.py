"""Build the two-sided letter-size trifold. Print landscape, actual size, short-edge duplex."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'output/pdf/eric-jones-computer-web-help.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
for name, filename in [('Serif','Georgia.ttf'), ('Sans','Arial.ttf')]:
    pdfmetrics.registerFont(TTFont(name, '/System/Library/Fonts/Supplemental/' + filename))
CREAM, GREEN, SAGE, RUST = map(HexColor, ['#f5eedf','#294d42','#e9e8da','#bc6347'])
LINE = HexColor('#cdd1c2')
W,H = 792,612
P = W/3
c = canvas.Canvas(str(OUT), pagesize=(W,H))
c.setTitle('Eric Jones - Computer & Web Help')
c.setAuthor('Eric Jones')

def panel(i, color=CREAM):
    c.setFillColor(color); c.rect(i*P,0,P,H,fill=1,stroke=0)

def text(i, y, content, size=10, font='Sans', color=GREEN, leading=None):
    style=ParagraphStyle('copy',fontName=font,fontSize=size,leading=leading or size*1.5,textColor=color)
    paragraph=Paragraph(content,style)
    _,height=paragraph.wrap(P-64,H)
    assert y-height >= 25, (content, y, height)
    paragraph.drawOn(c,i*P+32,y-height)
    return y-height

def label(i, y, content, color=GREEN):
    c.setFillColor(color);c.setFont('Sans',5.8);c.drawString(i*P+32,y,content)

def rule(i,y,color=LINE):
    c.setStrokeColor(color);c.setLineWidth(.6);c.line(i*P+32,y,(i+1)*P-32,y)

def icon(i,y,kind='learn',scale=1):
    c.saveState();c.translate(i*P+P/2-38*scale,y);c.scale(scale,scale)
    c.setStrokeColor(GREEN);c.setLineWidth(4);c.setLineJoin(1);c.setLineCap(1)
    if kind=='web':
        c.roundRect(0,0,76,57,2,fill=0);c.line(0,44,76,44)
        c.setFillColor(RUST)
        for x in [9,16,23]:c.circle(x,50,1.5,stroke=0,fill=1)
        c.roundRect(10,14,17,21,2,stroke=0,fill=1)
        c.line(38,31,63,31);c.line(38,21,56,21)
    elif kind=='tools':
        c.line(38,39,38,22);c.line(14,22,62,22);c.line(14,22,14,14);c.line(62,22,62,14)
        c.setFillColor(RUST);c.roundRect(24,39,28,27,2,fill=1,stroke=0)
        c.setFillColor(GREEN);c.roundRect(0,0,28,25,2,fill=1,stroke=0);c.roundRect(48,0,28,25,2)
    else:
        c.roundRect(0,18,50,37,2);c.line(10,42,28,42);c.line(10,32,20,32)
        c.setStrokeColor(RUST);c.roundRect(29,0,40,30,2);c.line(40,15,56,15)
    c.restoreState()

# Outside: left flap, back/contact, front cover.
for i in range(3):panel(i,GREEN if i==1 else CREAM)
label(0,568,'A NEIGHBOR YOU CAN ASK')
text(0,538,'No need to know<br/>the right words.',22,'Serif',leading=28)
text(0,448,'Technology can be overwhelming. Start with what’s frustrating you, what’s taking too much time, or what you wish worked better.',9.5)
icon(0,280,'learn',.9)
text(0,214,'We can work through it together.',12,'Serif')
text(0,170,'I help individuals and businesses understand what they’re using, so they can handle more on their own.',9.5)
rule(0,86)
text(0,68,'Based in Carson, WA.',8)
label(1,568,'LET’S START WITH A CONVERSATION',CREAM)
text(1,538,'First hour<br/>free.',29,'Serif',CREAM,35)
text(1,422,'Tell me what’s going on.<br/>We’ll fix the little things we can and make a plan for larger work.',10, color=CREAM)
rule(1,331,HexColor('#557164'))
text(1,314,'Eric Jones',21,'Serif',CREAM)
text(1,277,'Computer &amp; Web Help',9.5,color=CREAM)
text(1,232,'801.997.0379',13,color=CREAM)
text(1,205,'ericnatejones.com',10,color=CREAM)
c.linkURL('tel:+18019970379',(P+32,211,P*2-32,235),relative=0)
c.linkURL('https://ericnatejones.com',(P+32,186,P*2-32,207),relative=0)
text(1,151,'For yourself, a project, or your business.<br/>Carson, WA + surrounding areas',8.5,color=CREAM)
rule(1,86,HexColor('#557164'))
text(1,68,'CompTIA certified<br/>A+ · Network+ · Security+',8,color=CREAM)
label(2,568,'ERIC JONES')
text(2,538,'Your tech.<br/>Your ideas.<br/>A little help.',28,'Serif',leading=33)
label(2,380,'COMPUTER & WEB HELP')
icon(2,227,'web',1.75)
text(2,170,'Practical help for you,<br/>your projects, or your business.',10)
rule(2,111)
text(2,96,'Get it working.<br/>Learn to maintain it as we go.',11,'Serif')
text(2,47,'Carson, WA + surrounding areas · First hour free',6.7)
c.showPage()
# Inside spread.
for i in range(3):panel(i,SAGE if i==1 else CREAM)
services=[
('WEBSITES & ONLINE SHOPS','web','A website for<br/>what you do.','Share your work, grow your business, or give a personal project a home online. Let’s make a website that works for you.',['Personal sites, portfolios & online shops','Shopify, WordPress & website fixes','Development & maintenance'],'Have a site that’s been sitting unfinished? Let’s look at it.'),
('PROTOTYPES & CUSTOM TOOLS','tools','Try the idea.<br/>See what works.','Have an idea for something that would make life or work easier? We can make a working version to try together.',['Personal & business projects','Working prototypes & custom tools','Improvements to everyday tasks'],'Start with the task you wish didn’t take so much time.'),
('PATIENT GUIDANCE & PRACTICAL AI','learn','Learn something.<br/>Keep the know-how.','Computer questions, unfamiliar software, or curious about AI? We’ll make room for questions and work at a pace that makes sense.',['Everyday computer & software help','Explore useful ways to use AI','Learn as we work together'],'Bring a real problem. We’ll work through it together.')]
for i,(heading,kind,title,body,items,note) in enumerate(services):
    label(i,568,heading)
    icon(i,446,kind,.9)
    text(i,385,title,19,'Serif',leading=24)
    text(i,307,body,9.2,leading=14)
    rule(i,221)
    for j,item in enumerate(items):text(i,202-j*22,item.replace('&','&amp;'),9,leading=13)
    text(i,108,note,11,'Serif',leading=16)
    label(i,40,'ERIC JONES  ·  CARSON, WA + SURROUNDING AREAS')
c.save()
print(OUT)
