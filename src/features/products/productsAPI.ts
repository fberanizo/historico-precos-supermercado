
export function fetchProducts() {
  return Promise.resolve({data: [
    {regex: '(ABACAXI SCHRAMM CALD|ABACAXI OLE CALDA 40)', text: 'Abacaxi em calda'},
    {regex: '(ACHOC PO TODDY 400G|ACHOC PO ITALAC SCH 400G|ACHOC PO TODDY 400G|ACHOC TODDY 400G|TODDY TRAD.400g)', text: 'Achocolatado'},
    {regex: '(ACEM KG|CARNE ACEM MOIDO)', text: 'Acém' },
    {regex: '(ADOC ZERO CAL SACARI|ADOC.ZERO-CAL 200ML|ADOC LIQ ZERO CAL 100ML|ADOC.ZERO-CAL 100ML|ADOCANTE ZERO CAL LI|ADOC ZERO CAL SACARI)', text: 'Adoçante'},
    {regex: '(AGUA SANIT.YPE 2L|AGUA SANIT SUPREMA 1L|AGUA SANIT SUPREMA 2L|AGUA SANITARIA VAREK|AGUA SANITARIA TRIEX)', text: 'Água Sanitária'},
    {regex: '(ALHO GRANEL)', text: 'Alho' },
    {regex: '(AMAC TRIEX 2L|AMAC.R.BARBAREX 2L|AMAC URCA FLORAL 2L|AMAC FLEUR D YPE ACONCHEGO AZUL 2L|AMAC FLOR YPE LV 2L|AMAC.PLUSH 2L|AMAC.YPE AZUL PROMO|AMACIANTE YPE 2L)', text: 'Amaciante'},
    {regex: '(AMEIXA OLE LT 150G C)', text: 'Ameixa em calda' },
    {regex: '(AP PRESTOBARBA 3 LAM|CARGA GILLETE MACH3 REG 3UN|DES STICK GILLETTE C|AP BARB BIC COMFORT TWIN NORMAL 2UN|AP BARB PRESTOBARBA U GRIP 3 2UN|AP SUPER SHAVE 2UN|AP SUPER SHAVE 3 BAR|REFIL GILLETTE MACH3|PRESTOBARBA ULTRA GR)', text: 'Aparelho de Barbear'},
    {regex: '(APRESUNTADO SEARA KG|FC APRESUNTADO PEPER|APRESUNTADO FAT SADIA KG|APRESUNTADO PEPERI F|APRESUN PEPERI FAT)', text: 'Apresuntado'},
    {regex: '(ARROZ PARB.CAMIL|ARROZ PARBOILIZADO CAMIL 5KG|ARROZ PAN FERRO 5K P|ARROZ PARB.B.LEGAL|ARROZ PARB.RAROZ|ARROZ PARBOILIZADO CAMIL 5KG|ARROZ PARBOLIZADO BLUE VILLE 5KG|SOBRADINHO 5K PARBOI|ALBARUSKA 5KG PARBOI|ALBARUSKA 5KG T 1|ARROZ PANELA FERRO 5|ARROZ PILECCO 5KG PA)', text: 'Arroz 5kg'},
    {regex: '(ATUM RAL.COQUEIRO|ATUM COQUEIRO NAT 17|ATUM BALTICO LT 170G|ATUM ROBINSON CRUSOE)', text: 'Atum'},
    {regex: '(AVEIA FLOCOS N.LIFE|AVEIA SANJER 250G FL|AVEIA YOKI FLOCOS 500G|AVEIA YOKI FLOCOS FINOS 500G)', text: 'Aveia'},
    {regex: '(AZEITE PURO GALLO VD 500ML|AZ.OLIV.CONDE 500ML|AZEITE COCINERO 500M|AZEITE EX VIRGEM FAMIGLIA DORO VD 500ML|AZEITE EX VIRGEM LA ESPANOLA VD 500ML|AZEITE BALTICO CLASS)', text: 'Azeite'},
    {regex: '(AZEITONA DIZA SACHE|AZEITONA VDE FAT CAMPO BELO SCH 150G|AZEIT.FAT.DIZA 100g|AZEITONA DIZA 100)', text: 'Azeitona'},
    {regex: '(ACUC.PURINHA 5KG|ACUCAR CRISTAL CARAVELAS 5KG|ACUCAR BIG BOM 5KG C)', text: 'Açúcar Cristal 5kg'},
    {regex: '(ACUCAR UNIAO DEMERAR|ACUCAR MAIS DOCE 1KG)', text: 'Açúcar Demerara 1kg' },
    {regex: '(ACUCAR MASCAVO LOWCU)', text: 'Açúcar Mascavo 300g' },
    {regex: '(ACUCAR REF.CARAVELAS|UNIAO 1KG REFINADO C|ACUCAR CRISTAL CARAVELAS 1KG|ACUCAR BIG BOM EXTRA|ACUCAR REF CARAVELAS 1KG|ACUCAR REF.CARAVELAS|ACUCAR A ALEGRE 1KG|ACUCAR CARAVELAS 1KG)', text: 'Açúcar Refinado 1kg'},
    {regex: '(BACALHAU LING 8 10)', text: 'Bacalhau' },
    {regex: '(BACON SANTA ROSA PED|BACON SEARA KG|BACON MANTA SADIA KG|BACON MANTA SADIA KG|BACON SANTA ROSA PED|BACON SADIA|BACON SOFT PIG PED)', text: 'Bacon'},
    {regex: '(BICARB.SANJER 40G|SANJER 40G BIC SODIO|HIKARI 70G BICARBON)', text: 'Bicarbonato de Sódio'},
    {regex: '(BISC.RENATA LAM.360G|BISCOITO ZABET MANTE|BISCOITO ZABET DOCE)', text: 'Bolacha Maizena'},
    {regex: '(BISC.A.SAL TRIUNFO|BISC AGUA E SAL SPECIALAT 400G|BISCOITO ZABET 400G|BISC AGUA E SAL TRIUNFO 375G|BISC.A.SAL ZABET 400|BISC TRIUNFO SALG 37)', text: 'Bolacha Água e Sal'},
    {regex: '(CAFE EVOLUTTO 500g|CAFE GRAO DA TERRA 5|CAFE COPPO 500G|CAFE 3 CORACOES VACU|CAFE 3 CORACOES 500G|CAFE ALMOF TRAD 3 CORACOES 500G|CAFE 3 COR.500g|CAFE 3 COR.PROMO|CAFE 3 CORACOES TRAD|CAFE ALMOF EXTRA FORTE BRASILEIRO 500G|CAFE BIGBOM 500G|CAFE VACUO EX FORTE MANHA 500G)', text: 'Café 500g'},
    {regex: '(CAFE SOLUVEL EXTRA FORTE 3 CORACOES 50G|CAFE 3 COR.SACHET|CAFE 3 CORACOES SOLU|CAFE SOL.PACAEMBU|CAFE SOLUVEL PELE SCH 50G|MELITTA SOLUVEL 50G|CAFE PACAEMBU SOLUVE)', text: 'Café Solúvel'},
    {regex: '(BOMBOM LACTA 220G|B.BOM GAROTO 250G|BOMBOM NESTLE ESPECIALIDADES 300G|BOMBOM LACTA 289.2G|BOMBOM NESTLE 300G E|BOMBOM NESTLE ESPECIALIDADES 300G|BOMBOM GAROTO 250G S|BOMBOM GAROTO 300G S|BOMBOM LACTA 250 6G|BOMBOM NESTLE 251G E)', text: 'Caixa de Bombons'},
    {regex: '(CALDO ARISCO 114GR|CALDO MAGGI 114G|CALDO MAGGI CARNE 114G|CALDO KNORR 114GR|CALDO KNORR GALINHA|CALDO KNORR LV12PG10|CALDO MAGGI 152G)', text: 'Caldo Knorr'},
    {regex: '(CANJICA KODILAR 500G|CANJICA HIKARI 500G|CANJICA KININO 500G|CANJICA SANJER BRANC|CANJICA MILHO YOKI 5)', text: 'Canjica'},
    {regex: '(C SECA PAINEIRA 500G)', text: 'Carne Seca' },
    {regex: '(CEBOLA MEDIA)', text: 'Cebola' },
    {regex: '(CENOURA MEDIA)', text: 'Cenoura' },
    {regex: '(CHOPP A OUTRA LT 269|CERV PETRA LT 350ML|CERV.BHAM.MALZ.355ML|CERV.ITAI.MALZ.350ML)', text: 'Cerveja (Malzbier)'},
    {regex: '(CHANTILLY FLEISCHMAN|CR CHANTMIX AMELIA 2)', text: 'Chantilly' },
    {regex: '(CHOC GAROTO BARRA 90|CHOC.HERSHEY S 110g|CHOC.HERSHEY S 92G|CHOC GAROTO 1K AO LE)', text: 'Chocolate em Barra'},
    {regex: '(CH.PO OETKER 200g|CHOCOLATE PO HIKARI|CHOC PO OETKER 200G)', text: 'Chocolate em pó'},
    {regex: '(LIMPADOR VIM CLORO A|VIM CLORO 700ML)', text: 'Cloro em gel' },
    {regex: '(COCO PREFERIDA 50g|COCO RALADO SOCOCO 1|COCO RALADO MENINA 5|COCO FLOCOS MENINA10|COCO PREFERIDA 100g|COCO RALADO MENINA 1)', text: 'Coco Ralado'},
    {regex: '(CONTRA FILE KG|CARNE BOVINA CONTRA FILET EM BIFES)', text: 'Contra-Filé'},
    {regex: '(COXA C SOBRECOXA KG)', text: 'Coxa e Sobrecoxa de Frango' },
    {regex: '(CX MOLE KG)', text: 'Coxão Mole' },
    {regex: '(CR LEITE PIRACANJUBA|CR LEIT/E SHEFA TP 20|CR DE LEITE ITALAC TP 200G|CR LEITE SHEFA TP 20|CR.LEITE JUSSARA TP|CR.LEITE SHEFA 200g|CREME LEITE JUSSARA)', text: 'Creme de Leite'},
    {regex: '(CR PENTEAR SEDA NATU|CR.PENT.NIELY GOLD|CR PENTEAR PANTENE 2)', text: 'Creme de Pentear'},
    {regex: '(CURIMBA INT. kg|CURIMBA KG)', text: 'Curimba' },
    {regex: '(DESINF.CANDURA 2L|DESINF TRIEX 2L|DESINFETANTE URCA EU|DESINF BUFALO FLORAL 2L|DESINF DETAX 2L|DESINF SANOL 2L LAV|DESINF SANOL LAVANDA 2L|DESINF URCA LAVANDA 2L|DESINF.SANOL FLOR.2L|DESINFETANTE BAK YPE|PINHO CANDURA VIOLET)', text: 'Desinfetante 2L'},
    {regex: '(DES AERO REXONA WOMA|DESOD AERO MONANGE HID INTENSIVA 90G|DES AERO SUAVE WOMAN)', text: 'Desodorante Feminino'},
    {regex: '(DES SPRAY ZOG 90ML|DESOD AERO SUAVE SPORTFRESH 87G)', text: 'Desodorante Masculino'},
    {regex: '(DET.LIQ.YPE COCO|DET.LIQ.YPE CLEAR|DET.LIQ.YPE 500ML|LIMP.LIMPOL 500ML|LAVA LOUCA MINUANO 5|DETERG LIQ SUPREMA FR VERMELHAS 500ML|DET.LIQ.MINUANO LIM.|DET.LIQ.MINUANO MACA|DET.LIQ.MINUANO MAR.|DET.LIQ.YPE PACK|DETERG LIQ SUPREMA FR VERMELHAS 500ML|DETERG LIQ SUPREMA LIMAO 500ML|DETERG LIQ SUPREMA NEUTRO 500ML|L LOUCA TRIEX 500ML|LAVA LOUCAS YPE 500M)', text: 'Detergente'},
    {regex: '(CEPACOL 250ML|ENXAG.DENTICS PROM.)', text: 'Enxaguante Bucal' },
    {regex: '(ERVILHA FUGINI SACHE|ERVILHA QUERO SACHE|ERV.FUGINI SACHET|ERVILHA FUGINI 200G|ERVILHA FUGINI SCH 200G|ERVILHA QUERO MENOS SODIO 200G)', text: 'Ervilha 200g'},
    {regex: '(ESCOVA SORRISO ORIGI|ESC.TEK MED.|ESC DENT COLGATE ESSENCIAL CLEAN MACIA|ESC DENT J J REACH ULTRA CLEAN GRANDE|ESC DENT J J TEK|ESC.REACH.U.CLEAN MD|ESC DENT J J TEK DU|ESC DENT SORRISO TRI)', text: 'Escova de Dentes'},
    {regex: '(ESP.M.U.TININDO LV4|ESP.M.U.ESFREBOM C4|ESPONJA BRILHUS M US|ESPONJA ESFRELUX C 4|ESPONJA 3M TININDO L|ESPONJA ACO Q LUSTRO|ESPONJA M U SELECT 4UN)', text: 'Esponja'},
    {regex: '(CERESER MACA 660ML S|ESPUMA CERESER 660ML|ESPUMANT CERESER 660)', text: 'Espumante'},
    {regex: '(EXT.TOM.ELEFANTE 310G|EXT TOM ELEFANTE 340G|EXT.TOM.LAT.ELE.340g|EXTRATO ELEFANTE LT|EXTRATO ELEFANTE PET|EXTRATO ELEFANTE 340)', text: 'Extrato de Tomate'},
    {regex: '(FAR.MILHO DEUSA 500G|FARINHA MILHO AMARELA YOKI 500G|FARINHA S ANTONIO MI)', text: 'Farinha de Milho'},
    {regex: '(FAR.TRIGO RENATA 1KG|TRIGO NONITA 1KG|FAR.TRIGO T.OFELIA 1|FARINHA TRIGO RENATA|FARINHA CLARICE 1KG|FARINHA DE TRIGO LILI 1KG|FARINHA DE TRIGO SANTA CLARA 1KG|FARINHA TRIGO BIG BO|FARINHA VEGA 1KG)', text: 'Farinha de Trigo'},
    {regex: '(FAROFA MAND HIKARI 5|FAROFA MONJOLINHO|FAROFA PRONTA MAND YOKI 500G|FAROFA YOKI 500G)', text: 'Farofa'},
    {regex: '(FEIJAO MEU BIJU 1KG|FEIJAO C.OLIRON 1KG|FEIJAO DIVINO 1KG CA|FEIJAO CABRERA 2KG|FEIJAO CAIPIRA 2KG C|FEIJAO KIBELLO 1KG C|FEIJAO SOBRADINHO 1K|FEIJAO DU DE 1KG PRE|FEIJAO CAIPIRA 1KG C|FEIJAO CARIOCA DA CASA TP 1 1KG|FEIJAO CREMOSO 1KG C|FEIJAO CREMOSO 2KG C|FEIJAO G.CAMPO 1KG)', text: 'Feijão'},
    {regex: '(FEIJAO BIJU 1KG PRET|FEIJ.PRETO CAMIL 1KG|FEIJAO CABRERA PRETO)', text: 'Feijão Preto'},
    {regex: '(FERMENTO FERMIX 10G|FERM FLEISCHMANN 4UN|FERMENTO BIOL D BENTA SECO INST 10G|FERMENTO BIOL D OET)', text: 'Fermento Biológico'},
    {regex: '(FERMENTO DONA BENTA|FERM.PO D.BENTA 100g|FERMENTO PO OETKER 100G|FERMENTO PO D OETKER|FERMENTO PO ROYAL 10|FERMENTO QUIMICO APT)', text: 'Fermento em Pó'},
    {regex: '(FIGO SCHRAMM 440G)', text: 'Figo em Calda' },
    {regex: '(ORAL B 25M SAT FLOSS|FIO DENT HILLO 100M|FIO DENTAL COLGATE 5|FITA DENTAL COLGATE)', text: 'Fio dental'},
    {regex: '(FL.AL.WYDA 30CM|FOLHA ALUM WYDA 30CMX7.5M|FL.AL.WYDA 30CM|FOLHA ALUMINIO WYDA)', text: 'Folha de Papel Alumínio'},
    {regex: '(FUBA SANJER 1KG ESPE|FUBA KISABOR 500G|FUBA HIKARI 500G MIM|FUBA KODILAR 500G|FUBA YOKI 1KG|FUBA YOKI 500G|FUBA SANJER 500G MIM|FUBA SANJER MIMOSO 5)', text: 'Fubá'},
    {regex: '(PO GELATINA APTI 35G|GEL.OETKER LIMAO|GELAT.OETKER MORANGO|GELAT.OETKER UVA|PO GELATINA D OETKER|PO GELATINA OETKER 2)', text: 'Gelatina'},
    {regex: '(HIDRAT DAVENE HIPOAL|HIDRATANTE DAVENE AV|LOCAO HIDRAT AVEIA DAVENE T PELE 180ML|HIDRAT DAVENE LEITE|LEITE H.PAIXAO 200ML|HIDRAT DAVENE HIPOAL)', text: 'Hidratante de Pele'},
    {regex: '(INSET SBP AERO 450ML|INSET RAID AERO 420M|INSET AERO UFA MULTI L400ML P300ML|INSET SBP 45 NOITES|INSET SBP AERO 380ML)', text: 'Inseticida'},
    {regex: '(REPEL RAID 30N REFIL|REPEL RAID ELETR LIQ|REPEL RAID LIQ C 2 5)', text: 'Inseticida Refil'},
    {regex: '(IOG DANONE LIQ 1250G|IOG.LIQ.PAULISTA 850G|IOG DANONE 1350G VIT|IOG DANONE ACTIVIA Z|IOG PAULISTA LIQ 850|IOG MORANGO DANONE 1350G|IOG DANONE ACTIVIA 1|BEBIDA LACTEA MORANGO PAULISTA 850G|LEITE FERM AMEIXA 0% ACTIVIA 1250G|IOG NESTLE 1250G MOR|IOG NESTLE 1250G VIT|BEB LACT PALISTA 850|BEB LACT PAULISTA 85)', text: 'Iogurte'},
    {regex: '(FT LARANJA PERA EXTR|LARANJA PERA A GRANEL KG)', text: 'Laranja'},
    {regex: '(LASANHA OVOS DE 500G|LASANHA PETYBON 200G)', text: 'Lasanha' },
    {regex: '(LEITE SHEFA TP 1L|LEITE L VIDA QUATA 1|LEITE LV ITALAC 1L DESNA|LEITE LIDER 1L|LEITE JUSSARA 1L TP|LEITE JUSSARA MAX PE|LEITE PIRACANJUBA 1L|LEITE DESN CT ITALAC 1L|LEITE DESN.JUSSARA|LEITE DESNATADO NILZA 1LT|LEITE L VIDA BLINK 1|LEITE L VIDA MATILA|LEITE L VIDA TIROL 1|LEITE LONGA VIDA DESN ITALAC CT 1L|LEITE LONGA VIDA DESNAT PIRACANJUBA 1L)', text: 'Leite'},
    {regex: '(COND.TRIANGULO TP|LEITE COND CAMPOS JO|LEITE CONDENS PIRACA|LEITE CONDENS TIROL|LEITE COND NILZA 395G|LEITE COND ITALAC TP 395G|LEITE CONDENS FRIMES|LEITE CONDENS JUSSAR)', text: 'Leite Condensado'},
    {regex: '(LEITE C.COCO&C 200ML|LEITE COCO INDIANO 2|LEITE DE COCO BOM COCO 200ML|LEITE COCO MENINA 20|LEITE COCO TRAD.200M)', text: 'Leite de Coco'},
    {regex: '(LEITE PO INT CCGL SCH 400G|LEITE PO INT ITALAC SCH 400G|LEITE PO ITALAC PC 4|LEITE PO ITAMBE SACH|LEITE PO PCT.200g|LEITE PO SACH ITAMBE|LEITE PO PIRACANJUBA|LEITE PO PIRACANJUBA 200G)', text: 'Leite em Pó'},
    {regex: '(LIMP UAU PERFUMES LV|LIMP UAU LAVANDA 1L|LIMP.UAU LAVANDA|UAU LIMPEZA PERF 500)', text: 'Limp. Casa'},
    {regex: '(LIMP.UAU LV.1L PG.800ML|LIMP AZULIM M USO 50|LIMP UAU M USO 500ML|LIMP UAU MULTIUSO 50|LIMPADOR UAU MULTI U|LIMP ZAP CLEAN M USO LARANJA 500ML|LIMP UAU M USO 10 G|LIMP UAU MULTI USO LAVANDA 500ML|LIMP.M.USO.UAU LAV)', text: 'Limpador UAU'},
    {regex: '(CALABRESA SOFT PIG|CALABRESA SANTA ROSA|LING.CAL.SADIA KG|LING SEARA CALABRESA|CALABRESA SANTA ROSA|LING.CAL.PERDIGAO KG|LINGUICA CALABRESA SADIA KG|CALABRESA PERDIGAO D)', text: 'Linguiça Calabresa'},
    {regex: '(LING.TOSC.SEARA KG|LING.TOSC.AURORA KG|LING CARNE SUINA CONG NOBRE 1KG|LING MARCHIORI FRANG|LING NOBRE SUINA MIS|LING TOSCANA BIGBOM)', text: 'Linguiça Crua'},
    {regex: '(LUSTRA MOV DESTAC 50|LUSTRA MOV DESTAC 20|LUSTRA MOV BRAVO CLA|LUSTRA MOVEIS BRAVO|LIMP YPE M USO CLASSICO 500ML GTS 50ML|LUSTRA M.YPE JASMIM|LUSTRA MOVEIS YPE 20)', text: 'Lustra-Móveis'},
    {regex: '(ASSOLAN 8UN 60G|LA ACO ASSOLAN 60g|LA ACO ASSOLAN 8UN|LA ACO ASSOLAN PROMO)', text: 'Lã de Aço'},
    {regex: '(MAC OVOS LUCIANA ESPAGUETE 500G|MAC SEMOLA DAROZ ESPAGUETTI 2 500G|MAC SEMOLADO VITARELLA ESPAGUETE 500G|MAC.SEMOL.GALO 500G|MAC.SEM.GALO 500G)', text: 'Macarrão Espaguetti'},
    {regex: '(MAC SEMOLA GALO PARAFUSO 2 500G|MAC SEMOLADO BASILAR|MAC.SEM.GALO 500G|MAC.SEMOL.BASILAR|MACARRAO BASILAR SEM|S AMALIA SEMOLA 500G|MACARRAO GALO SEMOLA|MAC GALO SEMOLADO 50|MAC BARILLA 500G ESP|MAC S AMALIA OVOS 50|MAC STA AMALIA SEMOL)', text: 'Macarrão Parafuso'},
    {regex: '(MAIONESE FUGINI 200G|MAIONESE ARISCO 500g|MAIONESE HELLMANNS 5|MAIONESE SUAVIT 500G|MAIONESE SUAVIT PT 500G)', text: 'Maionese'},
    {regex: '(AMIDO M.KODILAR 500g|MAIZENA 200G|AMIDO MILHO KININO 5|AMIDO MILHO QUERO 20)', text: 'Maisena'},
    {regex: '(FT MARACUJA AZEDO)', text: 'Maracujá' },
    {regex: '(MARG BECEL 500G|BECEL 250G|BECEL 500G|BECEL 500G MANTEIGA|CR VEGETAL PRIME 500|CR.VEG.BECEL 500G|CREME VEGETAL CSAL TRAD BECEL 500G|MARG CLAYBOM 500G|CR VEGETAL BECEL 500|MARGARINA BECEL 500G)', text: 'Margarina'},
    {regex: '(PO MARIA MOLE APTI 5|PO MARIA MOLE OETKER)', text: 'Maria Mole'},
    {regex: '(MASSA PASTEL GUACU 1|MASSA PASTEL HIRATA|MASSA PASTEL SIORELLA 500G)', text: 'Massa de Pastel'},
    {regex: '(FILE DE MERLUZA CONG JESSY SEAFOODS 800G|FILE DE MERLUZA CONG JESSY SEAFOODS 1KG|FILE MERLUZA KG|FILE PESCADA CONG COSTA SUL 500G|MERLUZA HG CONG.KG)', text: 'Merluza'},
    {regex: '(MILHO FUGINI SACHE 1|MILHO FUGINI SACHET|MILHO FUGINI 200G SA|MILHO FUGINI SACHET|MILHO VERDE STELA DORO 200G)', text: 'Milho'},
    {regex: '(MOLHO PIMENTA CEPERA)', text: 'Molho de Pimenta' },
    {regex: '(MOLHO STELLA D ORO 3|MOLHO TRAD.PRED.340g|MOLHO FUGINI SACHE 3|MOLHO TOM TRAD REFOG PREDILECTA SCH 340G|MOLHO TOM TRAD PRIMOR SACHE 340G|MOLHO TRAD.PRED.340g|MOLHO VAL SACHE 340G|MOLHO CEPERA SACHE 3)', text: 'Molho de Tomate'},
    {regex: '(FT MORANGO 250G)', text: 'Morango' },
    {regex: '(OLEO VITALIV PET 900|OLEO COAMO PET 900ML|OLEO CONCORDIA PET 9|OLEO SOYA PET 900ML|OLEO SOJA SOYA PVC 9|OLEO COCAMAR PET 900|OLEO LEVE PET 900ML|OLEO SOJA CONCORDIA 900ML|OLEO SOJA SOYA 900ML|OLEO SOJA SUAVIT|OLEO SOJA V.VELHA)', text: 'Óleo de Soja'},
    {regex: '(OVO SATOSHI 30UN GDE|OVOS ROFATTO GDE PVC C3)', text: 'Ovo (30)'},
    {regex: '(CHOCOTTONE BIG BOM K|PANETTONE CHOC POLLI CASA DORO 400G|PANETTONE FRUTAS POLLI CASA DORO 400G|PANETTONE FRUTAS NO PONTO KG|PANETTONE G.B.1KG)', text: 'Panetone'},
    {regex: '(PAPEL HIG NEVE LV12|PAPEL HIGIENICO NEV|PAPEL HIG NEVE FD L12P11UN 30M|P HIG SUBLIME C 8UN|PAP.H.NEVE L12 P11|PAPEL HIG NEVE LV12|PAPEL HIG NEVE LV16|PAPEL HIG PERSONAL FS 4UN 30M)', text: 'Papel Higiênico'},
    {regex: '(CR DENTAL ORAL B 70G|CR DENT COLGATE 90G|CR.COLG.TOTAL 12 90g|CR DENT ORAL B ANTI|CR DENT ORAL B 123 7|CR DENTAL COLGATE TO|CR DENTAL COLGATE NA|CR DENT COLGATE NATU|CJ CR DENT COLGATE T|COLGATE MAXIMA PROTE|CR DENT COLGATE TOTA|CR DENT COLGATE TOTAL12 MINT 90G|CR.COLG.PROF.140G|CR.COLG.TOTAL WHITEN|KIT COLGATE TOTAL 2)', text: 'Pasta de Dentes'},
    {regex: '(POSTA SUINA C COURO KG|PERNIL COSSO KG|PERNIL S OSSO)', text: 'Pernil Suíno'},
    {regex: '(PICANHA FATIADA KG)', text: 'Picanha' },
    {regex: '(PILHA RAYOVAC ALCALI|PILHA RAYOVAC LV PG)', text: 'Pilha' },
    {regex: '(PIPOCA KISABOR 500G|PIPOCA HIKARI TRAD 5|MILHO PIPOCA SANJER)', text: 'Pipoca'},
    {regex: '(PRESUN FRIMESA PC|PRESUNTO FRIMESA S C)', text: 'Presunto' },
    {regex: '(PAO F.WICKBOLD 450G|PAO BAUDUCCO 400G IN|PAO PANCO 500G FORMA|PAO SOVADO KG|PAO VISCONTI INTEGRA|PAO WICK BOLD 450G I|PAO WICK BOLD 500G I|PAO FORMA INTEGRAL PANCO 500G|PAO F.VISCONTI 400G|PAO F.WICK.INT.450G|PAO FORMA INTEGRAL VISCONTI 400G|PAO FORMA INTEGRAL WICKBOLD 550G|PAO NEWBREAD 500G 10|PAO NEWBREAD 500G IN|PAO NEWBREAD FORMA|PAO W BOLD 400G QUAD|PAO WICK BOLD 550G I)', text: 'Pão de Forma'},
    {regex: '(PESSEGO SCHRAMM 450G|PESSEGO SCHRAMM CALD)', text: 'Pêssego em Calda'},
    {regex: '(QJO.MUSSARELA FAT.KG|QJO MUSSARELA FT KG|FC QJO MUSSARELA FAT|QJO MUSSARELA FAT|QUEIJO MUSSARELA FAT TRES MARIAS KG)', text: 'Queijo Muçarela'},
    {regex: '(QJO.RAL.PRESIDENT|QJO DINAPOLI 50G|QJO RALADO BIG 50G|QJO FUGINI 40G RALAD|QJO.RAL.VIGOR 50GR|QJO ITALAC 50G RALAD|QUEIJO PARMESAO RALADO ITALAC 50G|QUEIJO RALADO FIAPO TEIXEIRA 50G|QUEIJO RALADO TRAD TEIXEIRA 50G)', text: 'Queijo Ralado'},
    {regex: '(REFRIG FANTA 2L ZERO|REFRIG COCA COLA PET 2000ML TRAD + 250ML GTS|REFRIG FANTA PET 2000ML UVA)', text: 'Refrigerante'},
    {regex: '(REPOLHO VERDE)', text: 'Repolho' },
    {regex: '(REQ.P.CALDAS 200g|REQ SANTIAGO 200G|REQUEIJAO FRIMESA 20|REQUEIJAO FRIMESA 18|REQUEIJAO TRAD VIGOR 200G|REQ SANTIAGO 220G|REQ.NESTLE LIGHT|REQ.VIGOR 200GR|REQUEIJAO TRAD SCALA 200G|REQUEIJAO TRAD TIROLEZ 200G|REQUEIJAO VIGOR COP)', text: 'Requeijão'},
    {regex: '(SAB FLOR YPE SUAVE 8|SAB LIVY 85G|SAB.LUX SVE.85g|SAB FLOR YPE SUAVE 9|SAB J J 90G|SAB JOHNSONS 80G|SAB LUX SUAVE 85G|SAB MOTIVUS 90G|SAB PALMOLIVE NATURA|SAB PHEBO 90G|SAB REXONA 84G|SABONETE PALMOLIVE 1|SAB LUX SUAVE ROSAS FRANCESAS 85G|SAB PROTEX LIMPEZA PROFUNDA 85G|SAB LUX SUAVE FLOR LOTUS 85G|SAB REXONA ANTIBACTERIAL ALOE 84G|SAB PROTEX MEN SPORT 85G|SAB FRANCIS SUAVE 85|SAB JOHNSON LAVANDA 80G|SAB JOHNSON LAVANDA E ALECRIM 90G|SAB JOHNSON OLEO AMEND 90G|SAB JOHNSONS 90GR|SAB NIVEA ANTIBACTER|SAB NIVEA HIDRATANTE|SAB PALMOLIVE SUAVE HID PERF ROSAS 85G|SAB PALMOLIVE SUAVE OLEO NUT CAMELIA 85G|SAB PROTEX COMPLETE 12 85G|SAB.ALBANY SVE.90GR|SAB.FRANCIS SVE.85G|SAB.PALM.85G|SABON.PALM.85G|SABON.PALM.ARGAN 85G|SABON.YPE BCO.90g|SABON.YPE ROSA 90g|SABON.YPE SVE.AMAR|SABONETE LIVY 90G|SABONETE NIVEA 85G)', text: 'Sabonete'},
    {regex: '(SABAO MINUANO GLICER|SABAO RAZZO 200G TIR|SABAO YPE PEDRA 5UN|SABAO PED YPE 5X200G|SABAO PEDRA TRIEX 5U)', text: 'Sabão em Pedra'},
    {regex: '(DET.PO TIXAN SACHET|L ROUPA APYCE 1KG|L ROUPA PO SURF 800G|LAVA ROUPA PO SURF F CEREJ LAVANDA 1KG|DET.PO TIXAN 1KG|DET.PO TIXAN 2KG|L ROUPA PO SURF 1 KG|L ROUPA PO SURF 1KG|LAVA ROUPA PO SURF HORTENCIA E F BCA 1KGALAVA ROUPA PO TIXAN PRIMAVERA 1KGALAVA ROUPA PO TIXAN PRIMAVERA 2KG)', text: 'Sabão em Pó'},
    {regex: '(SACO FREEZER WYDA 2K)', text: 'Saco Plástico' },
    {regex: '(SAL CISNE REFINADO 1|SAL REF.LEBRE 1|SAL REFINADO SELECT 1KG|SAL UNIAO 1KG REFINA|SAL NORSAL 1KG REFIN)', text: 'Sal'},
    {regex: '(SAPOLIO RADIUM 300G)', text: 'Sapólio' },
    {regex: '(SARDINHA ROBINSON CR|SARDINHA OLEO ROBINSON CRUSOE 125G|SARD.COQUEIRO 125G|SARDINHA EVISC CONG COSTA SUL 800G)', text: 'Sardinha'},
    {regex: '(SAZON 60GR|TEMP.SAZON MAR.60G|TEMP.SAZON VERM.60G|TEMPARISCO PO 50g)', text: 'Sazon'},
    {regex: '(SH SEDA 325ML|SH SEDA LISO PERFEITO 325ML|SH SUAVE 325ML|SH.SUAVE 325ML|SH DARLING 350ML|SHAMPOO F VEGETAIS|SHAMPOO FARMAERVAS)', text: 'Shampoo'},
    {regex: '(SOJA SANJER GRAOS 50)', text: 'Soja' },
    {regex: '(REFRESCO DEL VALLE FRESH LARANJA 1.5L|REFRESCO DEL VALLE FRESH LIMAO 1.5L|BEB DEL VALLE FRESH)', text: 'Suco 1,5L'},
    {regex: '(NECTAR MAGUARY CAJU 1L|SUCO MAGUARY LIMAO 1L|NECTAR MAGUARY LARANJA 1L|SUCO CAJU 1 LT|SUCO MARACUJA 1 LT|SUCO FR.CITRICAS 1 L|SUCO PESSEGO 1L)', text: 'Suco 1L'},
    {regex: '(SUCO UVA 1.5 LTS|SUCO PANIZZON 1 5L U|SUCO UVA AURORA 1 5L|SUCO UVA GARIBALDI 1|SUCO VITA SUCO 1 5L|SUCO VITA SUCO TP 1L|SUCO GARIBALDI 1 5L|SUCO INTEGRAL UVA SALTON 1.5L|SUCO PANIZZON 1 5L|SUCO PANIZZON 1.5L|SUCO UVA 1.5 LTS)', text: 'Suco de Uva'},
    {regex: '(TEMP.COMPL.CASTELO|TEMP COMPLETO SABOR AMI 300G|TEMP.CPIM.AR.300g|TEMPERO HIKARI COMPL|TEMP SABOR AMI 300G|TEMPERO ARISCO 300G|TEMPERO SAZON 60GR)', text: 'Tempero Completo'},
    {regex: '(TOALHA PAPEL BIANCO|TOALHA PAPEL STYLUS|PAP.TOALHA YURI FIT|TOALHA PAPEL NATUREZ|TOALHA PAPEL YURI FI|TOALHA PAPEL SELECT 2UN|TOALHA PAPEL YURI 2|TOALHA YURI FIT C2)', text: 'Toalha Papel'},
    {regex: '(TORRADA VISCONTI 120)', text: 'Torrada'},
    {regex: '(TRIGO KIBE HIKARI 50|TRIGO KIBE SANJER 50)', text: 'Trigo para Quibe'},
    {regex: '(RODO STA MARIA PLAST|VASSOURA TOBIAS MAX|VASSOURA TOBIAS PRIM)', text: 'Vassoura'},
    {regex: '(VINAG.BELMONT ALCOOL|VINAG.BELMONT MACA|VINAGRE ALCOOL NEVAL 750ML|VINAGRE CASTELO 750M|VINAGRE FORTALEZA 75)', text: 'Vinagre'},
    {regex: '(VINHO FRISANTE DONNA|VINHO L DONNA LAMBRU|VINHO C.GARCIA 750ML|VINHO CASAL GARCIA V)', text: 'Vinho'},
  ]});
}

// ALCOOL GEL COPERALCO
// ALCOOL ZUMBI 1L
// AMENDOCREM 200G AMEN
// BISC CHAMPAGNE MAGIT
// BISC VIERA PRINCESA
// BOLO LEITE CONDENSAD
// BORR.M.USO 1001
// CABIDE SANREMO LV6 P
// CEREAL ALCAFOODS FLA
// CHA D OETKER 15G CAM
// CHOCO B BOM 500G
// CJ TRESEMME SH 400ML
// COND F VEGETAIS BL
// COND F VEGETAIS PLAT
// COND SUAVE 325ML
// COND TRESEMME 400ML
// COND.TRIANGULO TP
// CONDICIONADOR KOLEN
// COPO NADIR GINGA CRI
// COPO NADIR LIGHT L
// CR YAMASTEROL 200G A
// DES AERO SUAVE MEN 1
// DES.CR.REXONA 48G
// DES CR REXONA AP 48G
// DESINF LYSOFORM 1L S
// DESOD SPRAY SENADOR CLASSIC 90ML
// DOCE ABOBORA BATATA BOIZINHO 260G
// DOCE MOCOTO BOIZINHO 140G
// DOCE TRIANGULO 400g
// DOCES SALMAO 450G SORTIDO
// ERVA DOCE SANJER 20G
// ESFOLIANTE NEUTROG 1
// ESP CANELA CASCA 20G
// ESP SANJ 20G P GRAO
// ESPUMA GILLETTE 175G
// ESPUMA PRESTOBARBA B
// FACA YANGZI INOX VER
// FILTRO PACAEMBU 103
// FRALDA DESC PAMPERS
// FRUTA CRISTALIZADA
// GARFO MESA YANGZI LA
// GARRAFA PLASDURAM 1L
// GLACUCAR UNIAO 500G
// GUARD LIPS FS 50UN 23.5X24CM 3107 G9
//
// HIKARI 30G CANELA PO
// HIKARI 30G ERVA DOCE
// HIKARI 7G MANJERIC
// JARRAS POTE IGARATIB
// JG COPO NADIR C 6 GI
// LAMPADA KIAN LED 9W
// MANTEIGA AVIACAO TA
// MIST BOLO APTI 400G
// MIST BOLO ITALAC LARANJA 400G
// NEDO ABRIDOR FURADOR
// NOZES S CASCA
// PALITO DENTE PARANA
// PALITO GINA 200UN 102
// PEIXE DESF TP BAC DES RIBERALVES 500G
// PERA WILIANS
// POTE PREMIUM PLASTUT
// PROTETOR LABIAL NIVE
// RALADOR YANGZI FOUR
// REFRESCO PO MID 25G
//
// SAB LIQ F VEGETAIS 3
// SAB LIQ TOK BOTHANIC

// SANJER 8G OREGANO
// SAPONACEO SAPOLIO RA
//
// SELECTA 100G LIGA NE
// SHAMPOO TRESEMME 400
// SOPA KNORR 38G
// STEAK PEIXE COSTA SUL 120G
// SUCO STA LARANJA 2L
// TACA NADIR 260ML VIN
// TACA NADIR GALLANT V
// TALHER TRAMONT ACO I
// TANGERINA PONKAN kg
// TENDER PAMPLONA KG
// TIRA MANCHA YPE 500M
// UVA PASSA PTA S SEM

// CHA LEAO 25G CAMOMIL

// DOCE TRIANGULO 400g
// MARG.CLAYBON 500GR
// COND.TRESEMME 200ML
// TINT.KOLESTON 20

// PREND MADEIRA PARANA
// FC MORTAD AURORA FAT
// ARROZ PRATO FINO 1KG

// ALCOOL GEL SKALA 280
// REMOVEDOR BUFALO 500
// FERMENTO FERMIX 10G
// REFR PO TANG 25G
// JG COPO NADIR GINGA

// LIMP AZULIM M USO 50
// COND TRESEMME 200ML
// SHAMPOO TRESEMME 400
// ESPEC A ERVAS 40G FI

// TEMP SABOR AMI 1KG
// FRUTAS CRISTAL KUKAM
// AMEIXA SECA KUKAMAR
// UVA PASSA ESCURA KUK
// NOZES KUKAMAR 150G S

// GARRAFA PLASUTIL 1 8
// PAO FRANCES KG C/3
// ESPEC SANJER 30G
// CANELA PO SANJER 20G
// ESPEC HIKARI 500G BI
// LOCAO HIDRATANTE OFF
// COND MONANGE 325ML

// TORRADA VISCONTI 120
// TACA NADIR GALLANT V
