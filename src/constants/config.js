var config = {};

config.toc = newCaculateDepth();

var bookNames = ["རྩ་རྒྱུད་གསང་བ་སྙིང་པོའི་འགྲེལ་པ་ཉི་མའི་སྙིང་པོ་ཞེས་བྱ་བ་གུ་རུ་པདྨ་རྒྱལ་པོའི་གས","རྩ་རྒྱུད་གསང་བའི་སྙིང་པོའི་འགྲེལ་པ་ཉི་མའི་སྙིང་པོ་ཞེས་བྱ་བ་གུ་རུ་པདྨ་རྒྱལ་པོའི་","དཔལ་ གསང་ བ་ སྙིང་ པོའི་ རྒྱ་ ཆེར་ འགྲེལ་ བ་ སློབ་ དཔོན་ ཉི་ མའི་ སེང་ གེའི་ འོད་ ཀྱིས་ མཛ","རྒྱུད་རྒྱལ་གསང་བ་སྙིང་པོའི་འགྲེལ་པ་རོང་ཟོམ་ཆོས་བཟང་གིས་མཛད་པ་བཞུགས་སོ།།","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་འགྲེལ་པ་ཕྱོགས་བཅུའི་མུན་པ་ཐམས","དཔལ་གསང་བ་སྙིང་པོའི་རྒྱུད་ཀྱི་བསྡུས་པའི་དོན་མ་རིག་པའི་མུན་པ་ཐམས་ཅད་སེལ་བ་ཞེས་བྱ","དཔལ་གསང་བ་སྙིང་པོའི་སྤྱི་དོན་ལེགས་པར་བཤད་པའི་སྣང་བས་ཡིད་ཀྱི་མུན་པ་ཐམས་ཅད་སེལ་བ་","གསང་འགྲེལ་ཕྱོགས་བཅུའི་མུན་སེལ་གྱི་སྤྱི་དོན་འོད་གསལ་སྙིང་པོ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་ཆེན་པོའི་བཤད་བརྒྱུད་ཀྱི་བླ་མ་རྣམས་ལ་གསོལ་བ་འདེབས་པ་བཀྲ་ཤིས་གྲུ","དཔལ་གསང་བ་སྙིང་པོའི་རྒྱུད་དོན་གསལ་བྱེད་མེ་ལོང་ཞེས་བྱ་བ་བཞུགས་སོ།།","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་ཁོག་དབུབ་རིན་པོ་ཆེ་འབར་བའི་གུ","གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་འགྲེལ་བཤད་རྒྱུད་དོན་གསལ་བར་བྱེད་པ","གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་འགྲེལ་བཤད་རྒྱུད་དོན་གསལ་བར་བྱེད་པ","སྒྱུ་འཕྲུལ་གསང་སྙིང་གི་འགྲེལ་པ་རྒྱུད་དོན་རྣམ་ངེས་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཆོས་ཚོམས་ངོས་གཟུང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","གསང་བ་སྙིང་པོའི་རྒྱུད་ཀྱི་སྤྱི་དོན་སྨན་ལུང་མི་བསྐྱོད་རྡོ་རྗེས་མཛད་པ་བཞུགས་སོ།།","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་འགྲེལ་པ་གསང་བདག་དགོངས་རྒྱན་ཞེ","དཔལ་གསང་བདག་དགོངས་རྒྱན་གྱི་སྤྱི་དོན་ཡན་གྱི་བཤད་པའི་ཟིན་བྲིས་བླ་མའི་མན་ངག་རིན་ཆེ","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་རྒྱལ་པོ་སྒྱུ་འཕྲུལ་དྲྭ-བ་སྤྱི་","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་རྒྱལ་པོ་སྒྱུ་འཕྲུལ་དྲྭ་བ་སྤྱི","གསང་བ་སྙིང་པོའི་སྤྱི་དོན་མཐོང་བས་དོན་རྟོགས་ཞེས་བྱ་བ་བཞུགས་སོ།།","དཔལ་ལྡན་གསང་བ་སྙིང་པོའི་སྤྱི་དོན་གྱི་བཤད་པའི་ཟིན་བྲིས་བླ་མའི་མན་ངག་དོན་གསལ་སྙིང","དཔལ་གསང་བའི་སྙིང་པོའི་རྒྱུད་ཀྱི་སྤྱི་དོན་ཉུང་ངུའི་ངག་གིས་རྣམ་པར་འབྱེད་པ་རིན་ཆེན","དཔལ་གསང་བའི་སྙིང་པོ་དེ་ཁོ་ན་ཉིད་ངེས་པའི་རྒྱུད་ཀྱི་འགྲེལ་པ་ཟབ་དོན་སྒོ་བརྒྱ་འབྱེད","མཚན་ཉིད་དང་རྒྱུད་ཐམས་ཅད་ཀྱི་ལུང་གི་སྤྱི། དེ་བཞིན་གཤེགས་པ་ཐམས་ཅད་ཀྱི་གསང་བའི་སྙི","དཔལ་གསང་བའི་སྙིང་པོའི་འགྲེལ་པ་སྤར་ཁབ་ཀྱི་མཆན་འགྲེལ་ཉི་མའི་འོད་ཟེར་ཞེས་བྱ་བ་ནམ་མ","དཔལ་གསང་བ་སྙིང་པོའི་རྒྱུད་ཀྱི་མཆན་འགྲེལ་ནོར་བུའི་སྒྲོན་མེ་ཞེས་བྱ་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་རྩ་བའི་རྒྱུད་ཀྱི་མཆན་འགྲེལ་ཉི་ཟླའི་སྙིང་པོ་ཞེས་བྱ་བ་བཞུགས་སོ།།","གསང་བ་སྙིང་པོའི་གཏན་ཚིགས་རྣམས་ཀྱི་ཟིན་ཐོ་བཞུགས།།","སྒྱུ་འཕྲུལ་གསང་བ་སྙིང་པོའི་དཀའ་གནད་བསྡུས་དོན་བླ་མའི་ཞལ་ལུང་བཞུགས།","སྒྱུ་འཕྲུལ་དྲྭ་བའི་ལམ་རྣམ་པར་བཤད་པ་ཆུང་ངུའི་འབྲུ་འགྲེལ་བད་རྩིའི་ཐིགས་པ་ཞེས་བྱ་བ","སྒྱུ་འཕྲུལ་ལམ་རིམ་གྱི་བསྡུས་དོན་འཕྲུལ་གྱི་ལྡེ་མིག་ཞེས་བྱ་བ་བཞུགས་སོ།།","རྩ་རྒྱུད་གསང་བ་སྙིང་པོའི་དཀའ་གནད་ལ་དོགས་པ་གཅོད་པའི་ལུང་རིགས་རྡོ་རྗེའི་རོལ་རྩེད་","དཔལ་གསང་བ་སྙིང་པོའི་སྤྱི་དོན་གཏན་ལ་འབེབས་པའི་ཐལ་འགྱུར་རིགས་པའི་སྒོ་འབྱེད་ཅེས་བྱ","གསང་སྔགས་རྡོ་རྗེ་ཐེག་པའི་ཚུལ་ལས་སྣང་བ་ལྷར་བསྒྲུབ་པ་རོང་ཟོམ་ཆོས་བཟང་གིས་མཛད་པ་བཞ","སྒྱུ་འཕྲུལ་གྱི་དཀའ་བའི་གནས་སྣང་བ་ལྷར་བསྒྲུབ་པ་དོགས་པ་གཅོད་པ་ལུང་རིགས་མུ་ཏིག་ཕྲེ","དཔལ་ལྡན་གསང་བ་སྙིང་པོའི་ཁོག་འབུབ་ས་བཅད་ཀྱི་རིམ་པ་ཉུང་ངུ་འཁོར་འདས་བར་གྱི་ལོ་ཙཱ་ཞ","གསང་སྔགས་རྡོ་རྗེ་ཐེག་པའི་མན་ངག་ལམ་གྱི་རིམ་པ་རིན་པོ་ཆེ་རྣམ་པར་བཀོད་པ་ཞེས་བྱ་བ་བཞ","སློབ་དཔོན་སངས་རྒྱས་གསང་བས་མཛད་པའི་ལམ་རིམ་ཆེན་མོ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བའི་ལམ་རྣམ་པར་བཤད་པ་ཆུང་ངུ་བཞུགས་སོ།།","མན་ངག་ལྟ་བའི་ཕྲེང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","མན་ངག་ལྟ་ཕྲེང་གི་འགྲེལ་པ་རོང་ཟོམ་པཎྜི་ཏ་ཆེན་པོ་ཆོས་ཀྱི་བཟང་པོས་མཛད་པ་བཞུགས་སོ།།","མན་ངག་ལྟ་བའི་ཕྲེང་བའི་ཚིག་དོན་གྱི་འགྲེལ་ཟིན་མདོར་བསྡུས་པ་ཟབ་དོན་པད་ཚལ་འབྱེད་པའི","མན་ངག་ལྟ་བའི་ཕྲེང་བའི་བཤད་པ་རྒྱུད་དོན་རིན་པོ་ཆེ་སྣང་བྱེད་ཅེས་བྱ་བ་བཞུགས་སོ།།","སློབ་དཔོན་ཆེན་པོ་པདྨ་འབྱུང་གནས་ཀྱིས་མཛད་པའི་མན་ངག་ལྟ་བའི་ཕྲེང་བའི་མཆན་འགྲེལ་ནོར","ལྟ་བའི་རིམ་པ་བཤད་པ་བཞུགས།","།མ་མོ་གསང་བ་ལས་ཀྱི་ཐིག་ལེ་ཞེས་བྱ་བ་བཞུགས་སོ།","འཕགས་པ་དཔལ་གསང་བའི་སྙིང་པོའི་འགྲེལ་པ་རིན་པོ་ཆེ་སྤར་ཁབ་ཅེས་བྱ་བ།","གསང་སྔགས་རྡོ་རྗེ་ཐེག་པའི་མན་ངག་ལམ་གྱི་རིམ་པ་རིན་པོ་ཆེ་རྣམ་པར་བཀོད་པ་བཞུགས་སོ།","ལམ་རིམ་འགྲེལ་པ་སྣར་སྟོན་པས་མཛད་པ་བཞུགས་སོ།།","རྣལ་འབྱོར་ཆེན་པོའི་རྒྱུད་སྒྱུ་འཕྲུལ་དྲྭ་བའི་མན་ངག་དཔལ་ལམ་གྱི་རིམ་པ་ཞེས་བྱ་བའི་ད","ཐུགས་ཀྱི་ཐིགས་པའི་མན་ངག་ཅེས་བྱ་བ་བཞུགས་སོ།།","མན་ངག་ཐུགས་ཀྱི་ཐིགས་པའི་འགྲེལ་བཤད་ཉི་མའི་འོད་ཟེར་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཐུགས་ཀྱི་ཐིགས་པའི་འགྲེལ་བཤད་རིན་ཆེན་སྒྲོན་མ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཐུགས་ཀྱི་ཐིགས་པའི་བསྡུས་དོན་","རྣལ་འབྱོར་ཆེན་པོའི་རྒྱུད་ཀྱི་དེ་ཁོ་ན་ཉིད་སྣང་བའི་བརྒྱན་ཅེས་བྱ་བ་བཞུགས་སོ།།","གསང་སྔགས་རྡོ་རྗེ་ཐེག་པའི་མན་ངག་ལམ་གྱི་རིམ་པ་རིན་པོ་ཆེ་རྣམ་པར་བཀོད་པའི་འབྲུ་འགྲེ","སྒྱུ་འཕྲུལ་ལམ་གྱི་རིམ་པའི་འགྲེལ་པ་མུ་ཏིག་ཕྲེང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་མན་ངག་ལམ་གྱི་རིམ་པའི་འགྲེལ་བཤད་རིན་པོ་ཆེའི་ཆུ་དྭངས་ཞེས་བྱ་བ་བཞུགས་སོ","རྡོ་རྗེ་སེམས་དཔའ་སྒྱུ་འཕྲུལ་དྲྭ་བ་རྒྱུད་ཀྱི་འགྲེལ་བཤད་དང་སྒྲུབ་ཐབས་ཕྲ་མོའི་དཀར་","གསང་ཆེན་བཀའ་མའི་བསྟན་བཅོས་རྣམས་ཀྱི་དཀར་ཆག་ནོར་བུའི་དོ་ཤལ་ཞེས་བྱ་བ་བཞུགས་སོ།།","པཎྜི་ཏ་བི་མ་ལས་མཛད་པའི་གསང་བ་སྙིང་པོའི་འགྲེལ་ཆུང་བིཎྜཱརྠ་བཞུགས་སོ།།","ཐབས་ཀྱི་ཞགས་པ་པདྨོའི་ཕྲེང་བའི་འགྲེལ་པ་བཞུགས།།","རྡོ་རྗེ་སེམས་དཔའི་སྒྱུ་འཕྲུལ་དྲྭ་བའི་རྒྱུད་དཔལ་གསང་བའི་སྙིང་པོ་ཞེས་བྱ་བའི་སྤྱན་","ཁོག་གཞུང་གསལ་སྒྲོན་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་རིན་པོ་ཆེའི་འོད་སྣང་ཞེས་བྱ་བ་བཞུགས་སོ།།","སློབ་དཔོན་བཞད་པ་རྡོ་རྗེའི་ལ་ཤན་ལྟ་བའི་སྒྲོན་མེ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ལ་ཤན་ལྟ་བའི་སྒྲོན་མེའི་བསྡུས་དོན་བཞུགས།།","བཞད་པ་རྡོ་རྗེས་མཛད་པའི་ལ་ཤན་ལྟ་བའི་སྒྲོན་མའི་འགྲེལ་པ་བཞུགས་སོ།།","གཡུའི་ཐང་མ་སྐས་དགུ་བཞུགས་སོ།།","མཚན་ཉིད་སྒྲོན་མ་ཞེས་བྱ་བ་བཞུགས་སོ།།","རྣལ་འབྱོར་ཆེན་པོ་ཤེས་རབ་སྤྱན་འབྱེད་ཀྱི་མན་ངག་ཅེས་བྱ་བ་བཞུགས་སོ།།","ཐུགས་ཀྱི་སྒོ་ལྕགས་བཞུགས་སོ།།","དཀྱིལ་འཁོར་གྱི་ཆོས་དོན་མདོར་བསྡུས་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཐིག་གི་བཔིརྠ་བཞུགས་སོ།།","སེམས་བསྐྱེད་ཀྱི་ཆོ་ག་བཞུགས་སོ།།","བསྲེ་བའི་ཐོ་བྱང་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲ་བ་རྡོ་རྗེ་ལས་ཀྱི་རིམ་པ་བཞུགས།","སྒྱུ་འཕྲུལ་ཁྲོ་བོའི་དབང་སྒྲུབ་རྡོ་རྗེའི་ལས་ཀྱི་རིམ་པ་བཞུགས་སོ།།","དབང་ཆོག་ཆེ་བའི་དཀྱིལ་འཁོར་ཚོན་ཐོ་ནི།","དབང་དོན་ངེས་འབྱེད་བཞུགས།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་དབང་གི་གལ་པོ་བཞུགས།།","དབང་གི་གལ་པོའི་འགྲེལ་པ་བཞུགས།","ཞི་ཁྲོའི་གཏོར་དབང་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་ལྷན་ཅིག་སྐྱེས་པའི་ཡེ་ཤེས་སྣང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་ཐུགས་ཀྱི་ཐིགས་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","བི་མ་ལའི་སྒྱུ་འཕྲུལ་འཇམ་ཐིགས་བཞུགས་སོ།།","གསང་བའི་ཐིགས་པའི་མན་ངག་བཞུགས་སོ།།","གསང་བའི་ཐིགས་པའི་མན་ངག་གི་འགྲེལ་པ་བཞུགས།།","དབང་ག་ཅར་དུ་འཇུག་པ་བཞུགས།།","བདེ་བ་ཆེན་པོ་ཕྱག་རྒྱའི་མན་ངག་ཅེས་བྱ་བ་བཞུགས་སོ།།","རྡོ་རྗེ་དཔལ་ཆེན། དཔལ་ཆེན་ཁྲོ་རྒྱལ། ཡེ་ཤེས་མཁའ་འགྲོ་རྣམས་ཀྱི་བཤགས་པ་བཞུགས་སོ།།","དམ་ཚིག་ཉི་ཤུ་རྩ་བརྒྱད་པ་བཞུགས་སོ།།","རྡོ་རྗེ་རྒྱལ་མོའི་བཤགས་པ་བཞུགས་སོ།།","དཔེ་ཆུང་རང་གནས་ཞེས་བྱ་བ་བཞུགས་སོ།།","ལུང་བཞིའི་རྩ་བ་ཚིག་ལེའུར་བྱས་པ་བཞུགས།།","གནས་ལུང་ཆེན་མོའི་ཐོ་ཡིག་བཞུགས་སོ།།","གནས་ལུང་གི་དཀྱིལ་འཁོར་འབྲི་ལུགས།།","གནས་ལུང་གི་མན་ངག་བསྡུས་པ་གནས་ཆོག་ལས་འཕྲེང་ཞེས་བྱ་བ་བཞུགས་སོ།།","མན་ངག་གི་རིམ་པ་མདོར་བསྡུས་ཞེས་བྱ་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་སྟོང་ཕྲག་བརྒྱ་བའི་རྒྱུད་ལས་བཅུད་བསྡུས་མན་ངག་ལམ་རིམ་དོན་འབྱེད་","གནས་ཀྱི་ལུང་ཕྲན་བཅུ་དྲུག་ཅེས་བྱ་བ་རྣམས་ལེགས་པར་བཞུགས་སོ།།","སྦྱིན་སྲེག་གལ་འགགས་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བའི་སྦྱིན་སྲེག་གི་རིམ་པ་གཏན་ཚིགས་གཉིས་པ་བཞུགས་སོ།།","སྦྱིན་སྲེག་གི་མན་ངག་ཁོང་དོན་དཀྲོལ་བ་ནོར་བུ་ལུགས་ཞེས་བྱ་བ་བཞུགས་སོ།།","གསང་བའི་ཐིག་པའི་མན་ངག་རོ་སྲེག་གི་ལས་ཕྲེང་།","སྐུ་གདུང་ལས་ཀྱི་ཕྲེང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","བི་མ་ལའི་རབ་གནས།","རབ་གནས་ཀྱི་ཆོ་ག་རྣམ་པར་བསྲེས་པ་གསུམ་དང་སྦྱར་བ་ཞེས་བྱ་བ་བཞུགས།།","གནས་ཀྱི་གགས་སེལ་གཟེར་བཅོ་བརྒྱད་པ་བཞུགས་སོ།།","ཞི་ཁྲོ་ལས་ཀྱི་གལ་ཕྲེང་ཞེས་བྱ་བ་བཞུགས་སོ།།","མན་ངག་རྣམ་པར་བཀོད་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","རིམ་པ་དྲུག་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","རིམ་པ་དྲུག་པའི་འགྲེལ་པ་རིན་པོ་ཆེའི་ཕྲ་བཀོད་ཅེས་བྱ་བ་ལེགས་པར་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བའི་མན་ངག་རིམ་གསུམ་པ་བཞུགས་སོ།།","རིམ་གསུམ་འགྲེལ་པ་བཞུགས་སོ།།","སངས་རྒྱས་རྣམས་ཀྱིས་ཆོས་བསྟན་པ།།","སྒྱུ་འཕྲུལ་མེ་ལོང་འོད་ཕྲེང་བཞུགས།","ཡོ་གའི་གཞུང་རྒྱུད་ཕྱི་ནང་ལས། ངེས་དོན་མདོར་བསྡུས་པ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བའི་ལམ་དེ་ཁོ་ན་ཉིད་ངེས་པར་བསྡུས་པ་བཞུགས།།","རང་གནས་རྒྱལ་པོའི་འགྲེལ་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་ཁྲོ་བོ་བསྡུས་པའི་སྒྲུབ་ཐབས་དེ་ཉིད་ལས་སྣང་བ་དམ་པ་བརྒྱན","སྒྱུ་འཕྲུལ་ཚོགས་ཀྱི་འཁོར་ལོ་ཐིགས་ཀྱི་སྒྲུབ་པ་བཞུགས་སོ།།","ཕྱག་རྒྱ་བསམ་གཏན་བཞུགས་སོ།།","སྤྱོད་ཡུལ་སྦྱོང་བའི་བསམ་གཏན་ཞེས་བྱ་བ་བཞུགས་སོ།།","རིན་ཆེན་དྲྭ་བ་མངོན་རྫོགས་བཞུགས་སོ།།","མན་ངག་གསལ་སྒྲོན་བཞུགས་སོ།།","གཏོར་མའི་ལུང་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཆ་གསུམ་གྱི་སྒོམ་ཕྲེང་བཞུགས་སོ།།","བསྟན་པའི་སྙིང་པོ་རིག་པའི་སྒྲོན་མེ་ཞེས་བྱ་བ་བཞུགས་སོ།།","འཕྲུལ་གྱི་མེ་ལོང་དགུ་སྐོར་ཞེས་བྱ་བ་བཞུགས་སོ།།","འཕྲུལ་གྱི་མེ་ལོང་དགུ་སྐོར་གྱི་འགྲེལ་པ་བཞུགས།","ཐིགས་ཀྱི་སྒྲོན་མ་བཞུགས་སོ།།","ལྟ་བ་ཡང་དག་སྒྲོན་མ་བཞུགས།","རྣལ་འབྱོར་སྤྱོད་པའི་ལུགས་ངེས་པའི་དོན་ལ་ཇི་བཞིན་སྒོམ་ཐབས་ཀྱི་སྒྲོན་མ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་རྒྱས་པའི་སྒྲུབ་ཐབས་འོད་ཀྱི་རིམ་པ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་ཞི་བ་འབྲིང་པོའི་སྒྲུབ་ཐབས་རིན་ཆེན་དྲྭ་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཞི་བ་འབྲིང་པོའི་སྒྲུབ་ཐབས་རིན་ཆེན་ཕྲེང་བ་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་དྲྭ་བ་མེ་ལོང་ལྟ་བུའི་སྒྲུབ་ཐབས་བཞུགས་སོ།།","སྒྲུབ་ཐབས་རིན་ཆེན་དྲྭ་བ་བསྡུས་པ་བཞུགས།","དངོས་གྲུབ་གྲུབ་པའི་སྒྲུབ་ཐབས་བཞུགས་སོ།།","སྒྱུ་འཕྲུལ་ཁྲོ་བོ་བསྡུས་པའི་སྒྲུབ་ཐབས་ཧེ་རུ་ཀའི་གལ་ཕྲེང་བཞུགས་སོ།།","ཁྲོ་བོ་ཡང་དག་སྒྲོན་མ་བཞུགས་སོ།།","གསང་སྔགས་ལམ་རིམ་འགྲེལ་པ་རིན་ཆེན་ཕྲེང་བ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཕྱི་ཆོས་མདོ་སྔགས་ཐུན་མོང་གི་ལམ་རིམ་རིན་ཆེན་སྤུངས་པ་ཞེས་བྱ་བ་བཞུགས་སོ།།","ཞི་བ་ལྷ་རྒྱུད་ཅེས་བྱ་བ་བཞུགས་སོ།།","ཞི་རྒྱུད་དང་། ཁྲོ་རྒྱུད་བཞུགས་སོ།།","ཞི་བའི་ལྷ་རྒྱུད་ཀྱི་འགྲེལ་བ་བཞུགས་སོ།།","ཁྲོ་བོ་རྟོག་པ་ལྷ་རྒྱུད་ཀྱི་འགྲེལ་པ་བཞུགས་སོ།།","པདྨའི་ལམ་རིམ་གྱི་ལོ་རྒྱུས་བཞུགས།"];

var j = 0;
var toc = config.toc;
for (var i = 0; i < toc.length; i++) {
    if (toc[i].d === 2) {
        toc[i].t = bookNames[j];
        j++;
    }
}

module.exports = config;

function newCaculateDepth() {

    var newRealToc = [{
        d : 0,
        o : true,
        t : 'head'
    },{
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 1-10'
    },
        {"d":2,"t":"1","vpos":7},{"d":2,"t":"2","vpos":131519},{"d":2,"t":"3","vpos":258981},{"d":2,"t":"4","vpos":371869},{"d":2,"t":"5","vpos":470876},{"d":2,"t":"6","vpos":635916},{"d":2,"t":"7","vpos":641044},{"d":2,"t":"8","vpos":681276},{"d":2,"t":"9","vpos":741986},{"d":2,"t":"10","vpos":742558},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 11-20'
    },
        {"d":2,"t":"11","vpos":883863},{"d":2,"t":"12","vpos":910480},{"d":2,"t":"13","vpos":1023498},{"d":2,"t":"14","vpos":1138372},{"d":2,"t":"15","vpos":1263025},{"d":2,"t":"16","vpos":1266148},{"d":2,"t":"17","vpos":1296289},{"d":2,"t":"18","vpos":1403278},{"d":2,"t":"19","vpos":1460322},{"d":2,"t":"20","vpos":1561145},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 21-30'
    },
        {"d":2,"t":"21","vpos":1672920},{"d":2,"t":"22","vpos":1704477},{"d":2,"t":"23","vpos":1750804},{"d":2,"t":"24","vpos":1802101},{"d":2,"t":"25","vpos":1941955},{"d":2,"t":"26","vpos":2128453},{"d":2,"t":"27","vpos":2225997},{"d":2,"t":"28","vpos":2284045},{"d":2,"t":"29","vpos":2354499},{"d":2,"t":"30","vpos":2357975},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 31-40'
    },
        {"d":2,"t":"31","vpos":2368289},{"d":2,"t":"32","vpos":2389077},{"d":2,"t":"33","vpos":2397887},{"d":2,"t":"34","vpos":2414607},{"d":2,"t":"35","vpos":2462830},{"d":2,"t":"36","vpos":2467464},{"d":2,"t":"37","vpos":2470683},{"d":2,"t":"38","vpos":2474496},{"d":2,"t":"39","vpos":2540981},{"d":2,"t":"40","vpos":2565527},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 41-50'
    },
        {"d":2,"t":"41","vpos":2569630},{"d":2,"t":"42","vpos":2572826},{"d":2,"t":"43","vpos":2594930},{"d":2,"t":"44","vpos":2613593},{"d":2,"t":"45","vpos":2685170},{"d":2,"t":"46","vpos":2698349},{"d":2,"t":"47","vpos":2699873},{"d":2,"t":"48","vpos":2703458},{"d":2,"t":"49","vpos":2756142},{"d":2,"t":"50","vpos":2781320},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 51-60'
    },
        {"d":2,"t":"51","vpos":2809488},{"d":2,"t":"52","vpos":2855867},{"d":2,"t":"53","vpos":2862689},{"d":2,"t":"54","vpos":2928266},{"d":2,"t":"55","vpos":2998966},{"d":2,"t":"56","vpos":3001522},{"d":2,"t":"57","vpos":3055520},{"d":2,"t":"58","vpos":3164034},{"d":2,"t":"59","vpos":3348108},{"d":2,"t":"60","vpos":3520735},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 61-70'
    },
        {"d":2,"t":"61","vpos":3523130},{"d":2,"t":"62","vpos":3525098},{"d":2,"t":"63","vpos":3540859},{"d":2,"t":"64","vpos":3559498},{"d":2,"t":"65","vpos":3640477},{"d":2,"t":"66","vpos":3644469},{"d":2,"t":"67","vpos":3645720},{"d":2,"t":"68","vpos":3648338},{"d":2,"t":"69","vpos":3649548},{"d":2,"t":"70","vpos":3673020},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 71-80'
    },
        {"d":2,"t":"71","vpos":3677244},{"d":2,"t":"72","vpos":3678522},{"d":2,"t":"73","vpos":3679658},{"d":2,"t":"74","vpos":3682595},{"d":2,"t":"75","vpos":3685490},{"d":2,"t":"76","vpos":3686961},{"d":2,"t":"77","vpos":3689872},{"d":2,"t":"78","vpos":3689995},{"d":2,"t":"79","vpos":3701087},{"d":2,"t":"80","vpos":3709258},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 81-90'
    },
        {"d":2,"t":"81","vpos":3709450},{"d":2,"t":"82","vpos":3713150},{"d":2,"t":"83","vpos":3714630},{"d":2,"t":"84","vpos":3726289},{"d":2,"t":"85","vpos":3727458},{"d":2,"t":"86","vpos":3729201},{"d":2,"t":"87","vpos":3729900},{"d":2,"t":"88","vpos":3733340},{"d":2,"t":"89","vpos":3733791},{"d":2,"t":"90","vpos":3736992},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 91-100'
    },
        {"d":2,"t":"91","vpos":3739939},{"d":2,"t":"92","vpos":3742090},{"d":2,"t":"93","vpos":3744138},{"d":2,"t":"94","vpos":3745031},{"d":2,"t":"95","vpos":3745272},{"d":2,"t":"96","vpos":3748174},{"d":2,"t":"97","vpos":3748764},{"d":2,"t":"98","vpos":3749945},{"d":2,"t":"99","vpos":3750200},{"d":2,"t":"100","vpos":3754159},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 101-110'
    },
        {"d":2,"t":"101","vpos":3755101},{"d":2,"t":"102","vpos":3768668},{"d":2,"t":"103","vpos":3778913},{"d":2,"t":"104","vpos":3780197},{"d":2,"t":"105","vpos":3783629},{"d":2,"t":"106","vpos":3789216},{"d":2,"t":"107","vpos":3790171},{"d":2,"t":"108","vpos":3791352},{"d":2,"t":"109","vpos":3792624},{"d":2,"t":"110","vpos":3794838},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 111-120'
    },
        {"d":2,"t":"111","vpos":3798373},{"d":2,"t":"112","vpos":3801578},{"d":2,"t":"113","vpos":3816045},{"d":2,"t":"114","vpos":3822895},{"d":2,"t":"115","vpos":3849215},{"d":2,"t":"116","vpos":3850435},{"d":2,"t":"117","vpos":3854729},{"d":2,"t":"118","vpos":3855131},{"d":2,"t":"119","vpos":3855493},{"d":2,"t":"120","vpos":3872755},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 121-130'
    },
        {"d":2,"t":"121","vpos":3876839},{"d":2,"t":"122","vpos":3894651},{"d":2,"t":"123","vpos":3896964},{"d":2,"t":"124","vpos":3898638},{"d":2,"t":"125","vpos":3899651},{"d":2,"t":"126","vpos":3900887},{"d":2,"t":"127","vpos":3904810},{"d":2,"t":"128","vpos":3908670},{"d":2,"t":"129","vpos":3910000},{"d":2,"t":"130","vpos":3911345},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 131-140'
    },
        {"d":2,"t":"131","vpos":3912079},{"d":2,"t":"132","vpos":3913212},{"d":2,"t":"133","vpos":3918448},{"d":2,"t":"134","vpos":3925376},{"d":2,"t":"135","vpos":3927179},{"d":2,"t":"136","vpos":3927443},{"d":2,"t":"137","vpos":3932695},{"d":2,"t":"138","vpos":3936579},{"d":2,"t":"139","vpos":3943844},{"d":2,"t":"140","vpos":3948293},
        {
        d : 1,
        t : 'སྒྱུ་འཕྲུལ་ ཆོས་སྡེའི་ གླེགས་བམ་། 141-150'
    },
        {"d":2,"t":"141","vpos":3951644},{"d":2,"t":"142","vpos":3953185},{"d":2,"t":"143","vpos":3962880},{"d":2,"t":"144","vpos":3965990},{"d":2,"t":"145","vpos":3996841},{"d":2,"t":"146","vpos":4005134},{"d":2,"t":"147","vpos":4007831},{"d":2,"t":"148","vpos":4010720},{"d":2,"t":"149","vpos":4018845},
        // {"d":2,"t":"150","vpos":4061533} 这样就能正常显示了
        {"d":2,"t":"150","vpos":4061533, "flag" : "end"}
    ];


    return newRealToc;
}