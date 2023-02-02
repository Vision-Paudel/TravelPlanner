DROP table IF EXISTS city;

CREATE TABLE city(
	name VARCHAR(64) PRIMARY KEY,
	label TEXT NOT NULL DEFAULT 'Description unavailable',
	imagelink VARCHAR(512) NOT NULL DEFAULT 'Image montage unavailable'
);

INSERT INTO city VALUES ('Edmonton',
'Edmonton is the capital city of the Canadian province of Alberta. Edmonton is situated on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta''s central region. The city anchors the north end of what Statistics Canada defines as the "Calgary–Edmonton Corridor". As of 2021, Edmonton had a city population of 1,010,899 and a metropolitan population of 1,418,118, making it the fifth-largest city and sixth-largest metropolitan area (CMA) in Canada. It is also home to North America''s second largest mall, West Edmonton Mall (the world''s largest mall from 1981 until 2004), and Fort Edmonton Park, Canada''s largest living history museum.  (Wikipedia)',		 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Edmonton.png'),
						('Houston' , 'Houston is the most populous city in Texas, the most populous city in the Southern United States, the fourth-most populous city in the United States, and the sixth-most populous city in North America, with a population of 2,304,580 in 2020. Located in Southeast Texas near Galveston Bay and the Gulf of Mexico, it is the seat and largest city of Harris County and the principal city of the Greater Houston metropolitan area, which is the fifth-most populous metropolitan statistical area in the United States and the second-most populous in Texas after Dallas–Fort Worth. Houston is the southeast anchor of the greater megaregion known as the Texas Triangle. (Wikipedia)',						 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Houston.png'),
						 ('Johannesburg', 'Johannesburg, colloquially known as Jozi, Joburg, or "The City of Gold", is the largest city in South Africa, classified as a megacity, and is one of the 100 largest urban areas in the world.[14] According to Demographia, the Johannesburg–Pretoria urban area (combined because of strong transport links that make commuting feasible) is the 26th-largest in the world in terms of population, with 14,167,000 inhabitants. It is the provincial capital and largest city of Gauteng, which is the wealthiest province in South Africa. (Wikipedia)',				 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Johannesburg.png'),
						('London' , 'London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. (Wikipedia)',			'https://www.visionpaudel.ca/img/silvacomtravelplanner/London.png'),
						 ('Los Angeles','Spanish: Los Ángeles, lit. ''The Angels'', often referred to by its initials L.A., is the commercial, financial, and cultural center of Southern California. Los Angeles is the largest city in the state of California, the second most populous city in the United States after New York City, and one of the world''s most populous megacities. With a population of roughly 3.9 million residents within the city limits as of 2020, Los Angeles is known for its Mediterranean climate, ethnic and cultural diversity, being the home of the Hollywood film industry, and its sprawling metropolitan area. The city lies in a basin in Southern California adjacent to the Pacific Ocean in the west and extending through the Santa Monica Mountains and north into the San Fernando Valley, with the city bordering the San Gabriel Valley to its east. It covers about 469 square miles (1,210 km2), and is the county seat of Los Angeles County, which is the most populous county in the United States with an estimated 9.86 million residents as of 2022. (Wikipedia)',				 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Los_Angeles.png'),
						 ('Moscow','Moscow is the capital and largest city of Russia. The city stands on the Moskva River in Central Russia, with a population estimated at 13.0 million residents within the city limits, over 17 million residents in the urban area, and over 21.5 million residents in the metropolitan area. Moscow is among the world''s largest cities; being the most populous city entirely in Europe, the largest urban (5,891 square km) and metropolitan area (26,000 square km) in Europe, and the largest city by land area on the European continent. (Wikipedia)',
'https://www.visionpaudel.ca/img/silvacomtravelplanner/Moscow.png'),
						 ('New York','New York, often called New York City or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States, and is more than twice as populous as second-place Los Angeles. New York City lies at the southern tip of New York State, and constitutes the geographical and demographic center of both the Northeast megalopolis and the New York metropolitan area, the largest metropolitan area in the United States both by population and by urban landmass. (Wikipedia)',
'https://www.visionpaudel.ca/img/silvacomtravelplanner/New_York.png'),
						 ('Tokyo','Tokyo, officially the Tokyo Metropolis, is the capital and most populous city of Japan. Formerly known as Edo, its metropolitan area (13,452 square kilometers or 5,194 square miles) is the most populous in the world, with an estimated 37.468 million residents as of 2018; the city proper has a population of 13.99 million people. Located at the head of Tokyo Bay, the prefecture forms part of the Kantō region on the central coast of Honshu, Japan''s largest island. (Wikipedia)',
'https://www.visionpaudel.ca/img/silvacomtravelplanner/Tokyo.png'),
						 ('Toronto', 'Toronto, locally is the capital city of the Canadian province of Ontario. With a recorded population of 2,794,356 in 2021, it is the most populous city in Canada and the fourth most populous city in North America. The city is the anchor of the Golden Horseshoe, an urban agglomeration of 9,765,188 people (as of 2021) surrounding the western end of Lake Ontario, while the Greater Toronto Area proper had a 2021 population of 6,712,341. Toronto is an international centre of business, finance, arts, sports and culture, and is recognized as one of the most multicultural and cosmopolitan cities in the world. (Wikipedia)',		 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Toronto.png'),
						 ('Vatican','Vatican City, officially Vatican City State (Italian: Stato della Città del Vaticano and Latin: Status Civitatis Vaticanae), is an independent city-state, microstate and enclave within Rome, Italy. It became independent from Italy in 1929 with the Lateran Treaty, and it is a distinct territory under "full ownership, exclusive dominion, and sovereign authority and jurisdiction" of the Holy See, itself a sovereign entity of international law, which maintains the city state''s temporal, diplomatic, and spiritual independence. With an area of 49 hectares (121 acres) and a 2019 population of about 453, it is the smallest state in the world both by area and population. (Wikipedia)',			 'https://www.visionpaudel.ca/img/silvacomtravelplanner/Vatican.png');