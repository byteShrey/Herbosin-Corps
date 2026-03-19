// Product metadata for the Products page.
// Images are served from public/Assets/Products/...

const withName = (filename) => {
  const base = filename.replace(/\.[^/.]+$/, '')
  return base
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

const mapFiles = (folder, files) =>
  files.map((file) => ({
    id: `${folder}-${file}`,
    name: withName(file),
    imageSrc: `/Assets/Products/${folder}/${file}`,
    description:
      'Detailed information about this product will be added here. It is used in various applications where quality and consistency of botanical ingredients are important.',
  }))

export const essentialOils = mapFiles('Essential Oil', [
  'AGARWOOD-OUD-OIL..jpg',
  'Ajwain_Oil.jpg',
  'ALLSPICE-PIMENTO-BERRY-OIL..jpg',
  'Almond-Oil-Sweet.jpg',
  'Almond_Oil.webp',
  'Aloe-vera-Gel.jpg',
  'AMBRETTE-SEED-OIL..jpg',
  'Amla_Oil.webp',
  'AMYRIS-OIL..jpg',
  'Anethi-Oil.jpg',
  'ANGELICA-ROOT-OIL..jpg',
  'Anise_Oil.png',
  'Apricot-Oil.jpg',
  'Arnica-Oils.jpg',
  'AUSTRALIAN-SANDALWOOD-OIL..jpg',
  'Avacado_Oil.jpg',
  'BALSAM-FIR-OIL..jpg',
  'Basil-Oil.jpg',
  'BAY-LAUREL-LAUREL-LEAF-OIL..jpg',
  'Bay-Oils.jpg',
  'bergamoth_Oil.jpg',
  'BETEL-LEAF-OIL..jpg',
  'BLACK-PEPPER-OIL..jpg',
  'CALAMUS-OIL..jpg',
  'CAMPHOR-OIL..jpg',
  'Cananga Oil.jpg',
  'CARAWAY-OIL..jpg',
  'Cardamon_Oil_Green.jpg',
  'Carrot_Seed_Oil.jpeg',
  'CASSIA-OIL..jpg',
  'Cedarwood_Oil.jpg',
  'Chamomile-Oil.jpg',
  'Cinnamon-Oil.jpg',
  'Eucalyptus-Oil.jpg',
  'Fennel-Seed-Oil.jpg',
  'Flax-Seed-Oil.jpg',
  'Jojoba-oil.jpg',
  'Kumkumadi_Oil.webp',
  'Lavender_Oil.webp',
  'Neem-Oils.jpg',
  'Onion-Oil.jpg',
  'saffron-oil.jpg',
  'Tea-tree-oil.jpg',
  'Wheat-Germ-Oil.jpg',
  'Wintergreen-oil.jpg',
  'Ylang-Ylang-Oil.jpg',
]).map((item) => {
  switch (item.name) {
    case 'Kumkumadi Oil':
      return {
        ...item,
        description: `
Kumkumandi Oil

• A luxurious Ayurvedic skin brightening oil known for its ability to reduce dark spots, improve complexion, and restore a natural glow.
• Ideal for women seeking a traditional herbal remedy for radiant and even-toned skin.
        `.trim(),
      }
    case 'Lavender Oil':
      return {
        ...item,
        description: `
Lavender Oil

• A universally loved essential oil celebrated for its calming, stress-relieving aroma and gentle properties suitable for all age groups.
• Widely used in aromatherapy, skincare, and sleep-enhancing routines for its soothing and healing benefits.
        `.trim(),
      }
    case 'Ajowain Oils':
    case 'Ajwain Oil':
      return {
        ...item,
        description: `
Ajowain Oil

• Extracted from carom seeds, this potent oil is known for its strong, characteristic aroma and powerful antimicrobial and digestive properties.
• Commonly used in wellness formulations to support respiratory health and relieve muscle discomfort.
        `.trim(),
      }
    case 'Almond Oil Sweet':
    case 'Almond Oils':
    case 'Almond Oil':
      return {
        ...item,
        description: `
Almond Oil

• A deeply nourishing, cold-pressed oil rich in vitamins and fatty acids, perfect for moisturizing skin and strengthening hair.
• Suitable for all skin types, it absorbs easily and leaves skin soft, smooth, and well-hydrated.
        `.trim(),
      }
    case 'Amla Oil':
      return {
        ...item,
        description: `
Amla Oil

• Derived from the Indian gooseberry, this traditional oil is packed with antioxidants and vitamin C to promote hair growth and scalp health.
• A fragrant compound widely used in Ayurvedic hair care to prevent premature greying and add natural shine.
        `.trim(),
      }
    case 'Anise Oil':
      return {
        ...item,
        description: `
Aniseed Oil

• Steam distilled from anise flowers, this aromatic oil carries a sweet, licorice-like scent used extensively in perfumery and flavoring.
• Known for its digestive and expectorant properties, making it a popular choice in wellness and therapeutic products.
        `.trim(),
      }
    case 'Avacado Oil':
      return {
        ...item,
        description: `
Avocado Oil

• Cold-pressed from avocado seeds, this 100% pure oil is rich in essential fatty acids and vitamins that deeply nourish and hydrate the skin.
• Suitable for all age groups, it works excellently as a carrier oil in massage, skincare, and hair care blends.
        `.trim(),
      }
    case 'Basil Oil':
      return {
        ...item,
        description: `
Basil Oil

• A 100% pure essential oil extracted from fresh basil leaves, known for its refreshing herbal aroma and energizing properties.
• Widely used in aromatherapy and cosmetic formulations for its clarifying, anti-inflammatory, and stress-relieving benefits.
        `.trim(),
      }
    case 'Bergamoth Oil':
      return {
        ...item,
        description: `
Bergamot Oil

• A bright, citrusy essential oil known for its uplifting scent and versatile use in perfumery, skincare, and mood-enhancing aromatherapy.
• 100% pure and suitable for all age groups, it blends beautifully with floral and woody notes.
        `.trim(),
      }
    case 'Cananga Oil':
      return {
        ...item,
        description: `
Cananga Oil

• A rich floral oil distilled from cananga flowers, offering a deep, sweet fragrance similar to ylang ylang but with a milder, more earthy tone.
• Used in high-end perfumes, cosmetics, and relaxation blends for its romantic and calming aromatic profile.
        `.trim(),
      }
    case 'Cardamon Oil Green':
      return {
        ...item,
        description: `
Cardamon Oil Green

• Distilled from green cardamom, this warm, spicy-sweet oil is prized in perfumery, flavoring, and digestive wellness formulations.
• 100% pure and highly aromatic, it adds an exotic and invigorating touch to any blend or product.
        `.trim(),
      }
    case 'Carrot Seed Oil':
      return {
        ...item,
        description: `
Carrot Seed Oil

• A nutrient-rich oil cold-pressed from carrot seeds, celebrated for its skin-rejuvenating, anti-aging, and complexion-evening properties.
• Frequently used in premium skincare formulations for its antioxidant conteards use product.name and product.imageSrc only:nt and ability to support healthy, glowing skin.
        `.trim(),
      }
    case 'Cedarwood Oil':
      return {
        ...item,
        description: `
Cedarwood Oil

• A warm, woody essential oil known for its grounding aroma, widely used in men's grooming products, perfumery, and relaxation blends.
• Stored in cool conditions to preserve its rich, earthy fragrance and therapeutic qualities.
        `.trim(),
      }
    case 'Chamomile Oil':
      return {
        ...item,
        description: `
Chamomile Oil

• A gentle and soothing 100% pure essential oil renowned for its anti-inflammatory properties and calming effects on both skin and mind.
• Perfect for sensitive skin formulations, baby care products, and stress-relief aromatherapy blends.
        `.trim(),
      }
    case 'Cinnamon Oil':
      return {
        ...item,
        description: `
Cinnamon Oil

• A warm, spicy essential oil extracted from cinnamon, offering powerful antimicrobial properties and a distinctive comforting aroma.
• Used in personal care, perfumery, and wellness products for its stimulating and warming therapeutic benefits.
        `.trim(),
      }
    case 'Eucalyptus Oil':
      return {
        ...item,
        description: `
Eucalyptus Oil

• A 100% pure, refreshing oil with a sharp, camphor like scent widely used in respiratory health, muscle relief, and cleansing products.
• A staple in aromatherapy and home care formulations for its natural antibacterial and decongestant properties.
        `.trim(),
      }
    case 'Fennel Seed Oil':
      return {
        ...item,
        description: `
Fennel Seed Oil

• A 100% pure oil distilled from fennel seeds, carrying a sweet, anise-like aroma used in digestive wellness and detox formulations.
• Stored in cool conditions to maintain its fresh herbal potency, ideal for cosmetic and therapeutic applications.
        `.trim(),
      }
    case 'Flax Seed Oil':
      return {
        ...item,
        description: `
Flax Seed Oil

• A light, nutrient-rich oil extracted from flaxseeds, abundant in omega-3 fatty acids that support skin elasticity and hydration.
• Widely used in natural skincare and hair care products for its anti-inflammatory and moisturizing properties.
        `.trim(),
      }
    case 'Jojoba Oil':
      return {
        ...item,
        description: `
Jojoba Oil

• A liquid wax closely mimicking the skin's natural sebum, making it one of the most effective and versatile carrier oils in skincare.
• Ideal for moisturizing, balancing oily skin, and as a base for essential oil blends in cosmetics and hair treatments.
        `.trim(),
      }
    case 'Neem Oils':
    case 'Neem Oil':
      return {
        ...item,
        description: `
Neem Oil

• A powerfully active oil extracted from neem seeds, widely used for its strong antibacterial, antifungal, and pest-repelling properties.
• A popular ingredient in natural skincare, haircare, and organic agricultural products across India and worldwide.
        `.trim(),
      }
    case 'Onion Oil':
      return {
        ...item,
        description: `
Onion Oil

• A 99.9% pure essential oil known for its remarkable ability to reduce hair fall, stimulate scalp circulation, and promote hair regrowth.
• Rich in sulfur compounds, it is a trusted natural remedy in hair care formulations for thick, healthy, and lustrous hair.
        `.trim(),
      }
    case 'Saffron Oil':
      return {
        ...item,
        description: `
Saffron Oil

• One of the most precious and luxurious oils derived from pure saffron, celebrated for its brightening, anti-aging, and skin-evening properties.
• A premium ingredient in high-end cosmetic and wellness products, prized for its exotic aroma and potent antioxidant content.
        `.trim(),
      }
    case 'Tea Tree Oil':
      return {
        ...item,
        description: `
Tea Tree Oil

• A 100% pure, steam-distilled oil from Melaleuca alternifolia leaves, renowned for its powerful antibacterial, antifungal, and antiseptic properties.
• A must-have in natural skincare, acne treatments, and household cleansing products for its therapeutic and cleansing efficacy.
        `.trim(),
      }
    case 'Wheat Germ Oil':
      return {
        ...item,
        description: `
Wheat Germ Oil

• A nutrient-dense oil rich in vitamin E and essential fatty acids, offering exceptional moisturizing and skin-regenerating benefits.
• Ideal as a carrier oil in anti-aging skincare formulations to improve skin texture and protect against oxidative stress.
        `.trim(),
      }
    case 'Wintergreen Oil':
      return {
        ...item,
        description: `
Wintergreen Oil

• A cool, minty essential oil with natural analgesic properties, widely used in muscle rubs, pain relief products, and sports formulations.
• Its crisp, refreshing scent also makes it a popular choice in oral care and aromatherapy products.
        `.trim(),
      }
    case 'Ylang Ylang Oil':
      return {
        ...item,
        description: `
Ylang Ylang Oil

• A high-purity floral oil with an intensely sweet, exotic fragrance widely used in luxury perfumes, cosmetics, and romantic aromatherapy blends.
• Known for its mood-lifting and stress-reducing properties, it is a prized ingredient in both personal care and wellness products.
        `.trim(),
      }
    case 'AGARWOOD OUD OIL.':
      return {
        ...item,
        name: 'Agarwood (Oud) Oil',
        description: `
Agarwood (Oud) Oil

• One of the world's most rare and precious oils, distilled from agarwood resin, offering a deep, rich, and complex woody-smoky fragrance.
• Highly sought after in luxury perfumery and traditional wellness for its grounding, meditative, and aphrodisiac qualities.
        `.trim(),
      }
    case 'ALLSPICE PIMENTO BERRY OIL.':
      return {
        ...item,
        description: `
Allspice (Pimento Berry) Oil

• Distilled from pimento berries, this warm, spicy oil combines the aromas of clove, cinnamon, and nutmeg in one versatile blend.
• Used in perfumery, flavoring, and therapeutic formulations for its stimulating and warming aromatic properties.
        `.trim(),
      }
    case 'AMBRETTE SEED OIL.':
      return {
        ...item,
        description: `
Ambrette Seed Oil

• A 99% pure oil extracted from ambrette seeds, known for its unique musky, floral fragrance and memory-boosting aromatic qualities.
• A prized ingredient in natural perfumery as a vegan alternative to animal-derived musk.
        `.trim(),
      }
    case 'AMYRIS OIL.':
      return {
        ...item,
        description: `
Amyris Oil

• A warm, woody-scented oil distilled from amyris wood, valued as a natural fixative in perfumes and a soothing aromatherapy oil.
• Known for its memory-enhancing and calming properties, it blends seamlessly with floral and citrus fragrances.
        `.trim(),
      }
    case 'ANGELICA ROOT OIL.':
      return {
        ...item,
        description: `
Angelica Root Oil

• A 99% pure oil steam-distilled from angelica roots, carrying a rich, earthy, and herbaceous aroma used in premium perfumery and wellness.
• Traditionally valued for its grounding and detoxifying properties in holistic and therapeutic applications.
        `.trim(),
      }
    case 'AUSTRALIAN SANDALWOOD OIL.':
      return {
        ...item,
        description: `
Australian Sandalwood Oil

• A premium, sustainably sourced oil with a creamy, soft woody scent, highly valued in luxury perfumery and skin brightening formulations.
• Known to reduce pigmentation and provide a long-lasting, smooth fragrance base in cosmetics and high-end perfumes.
        `.trim(),
      }
    case 'BALSAM FIR OIL.':
      return {
        ...item,
        description: `
Balsam Fir Oil

• A 99% pure oil distilled from fir leaves, offering a fresh, forest-like aroma widely used in respiratory support and grounding blends.
• A popular ingredient in diffuser blends, spa products, and natural air fresheners for its clean, invigorating scent.
        `.trim(),
      }
    case 'BAY LAUREL LAUREL LEAF OIL.':
      return {
        ...item,
        description: `
Bay Laurel (Laurel Leaf) Oil

• A 99% pure, steam-distilled oil from laurel leaves with a warm, spicy-herbal fragrance used in perfumery and therapeutic applications.
• Valued for its antiseptic and stimulating properties, making it a key ingredient in hair care and wellness formulations.
        `.trim(),
      }
    case 'BETEL LEAF OIL.':
      return {
        ...item,
        description: `
Betel Leaf Oil

• A 99% pure oil extracted from betel leaves, carrying a sharp, peppery-herbal aroma with strong antimicrobial and oral care properties.
• Traditionally used in Ayurvedic and natural wellness products for its antiseptic, digestive, and aromatic benefits.
        `.trim(),
      }
    case 'BLACK PEPPER OIL.':
      return {
        ...item,
        description: `
Black Pepper Oil

• A 99% pure, warming oil steam-distilled from black pepper seeds, known for its ability to provide pain relief and improve circulation.
• Widely used in muscle and joint care products, detox blends, and perfumery for its bold, spicy, and invigorating aroma.
        `.trim(),
      }
    case 'CAMPHOR OIL.':
      return {
        ...item,
        description: `
Calamus Oil

• A 99% pure oil with a warm, woody-earthy aroma, traditionally used in Ayurvedic formulations and niche perfumery.
• Valued for its calming and grounding properties in therapeutic and aromatic applications.
        `.trim(),
      }
    case 'Camphor Oil':
      return {
        ...item,
        description: `
Camphor Oil

• A powerful essential oil with a sharp, penetrating aroma widely used in pain relief balms, chest rubs, and insect repellent formulations.
• Known for its analgesic and decongestant properties, it is a staple in traditional medicinal and wellness products.
        `.trim(),
      }
    case 'CARAWAY OIL.':
      return {
        ...item,
        description: `
Caraway Oil

• A 100% pure oil distilled from caraway seeds with a warm, spicy aroma commonly used in digestive wellness and flavoring applications.
• Popular in aromatherapy and natural care formulations for its carminative and soothing properties.
        `.trim(),
      }
    case 'CASSIA OIL.':
      return {
        ...item,
        description: `
Cassia Oil

• A 99% pure, warm cinnamon-like oil known for its fragrance properties, memory-boosting benefits, and skin brightening effects.
• Used in perfumery, cosmetics, and wellness blends as a warming and stimulating aromatic ingredient.
        `.trim(),
      }
    case 'Anethi Oil':
      return {
        ...item,
        description: `
Anethi Oil

• A delicate oil distilled from dill herb, carrying a fresh, herbal aroma with mild carminative and calming properties.
• Commonly used in digestive wellness blends and natural flavoring for its light, anise-like herbal scent.
        `.trim(),
      }
    case 'Almond Oil Sweet':
      return {
        ...item,
        description: `
Almond Oil Sweet

• A light, easily absorbed oil cold-pressed from sweet almonds, rich in oleic acid and vitamin E for deep skin nourishment.
• A versatile base oil used in massage, skincare, and haircare formulations for its gentle and moisturizing qualities.
        `.trim(),
      }
    case 'Apricot Oil':
      return {
        ...item,
        description: `
Apricot Oil

• A silky-smooth carrier oil extracted from apricot kernels, renowned for its ability to soften and hydrate all skin types.
• Rich in essential fatty acids and vitamins A and E, it is a popular base in facial serums and body care products.
        `.trim(),
      }
    case 'Arnica Oils':
      return {
        ...item,
        description: `
Arnica Oil

• A 99% pure herbal oil with a characteristic aroma, widely valued for its anti-inflammatory and pain-relieving properties.
• Commonly used in topical formulations for bruising, muscle aches, and sports recovery treatments.
        `.trim(),
      }
    case 'Aloe Vera Gel':
      return {
        ...item,
        description: `
Aloe Vera Gel

• A pure, cooling gel derived from aloe vera leaves, known for its exceptional skin soothing, hydrating, and healing properties.
• A must-have ingredient in after-sun care, natural skincare, and haircare products for its gentle and effective results.
        `.trim(),
      }
    case 'Bay Oils':
      return {
        ...item,
        description: `
Bay Oil

• A pale yellow to olive green essential oil steam-distilled from fresh bay leaves, offering a warm, spicy-herbal aroma.
• A high-purity, therapeutic oil widely used in hair growth formulations, natural perfumery, and aromatherapy blends.
        `.trim(),
      }
    default:
      return item
  }
})

export const herbalExtracts = mapFiles('Herbal Extracts', [
  'Amla.jpg',
  'Arjuna.jpg',
  'Ashoka.jpg',
  'Ashwagandha.jpeg',
  'Babool.jpg',
  'Bhringraj.jpg',
  'Bhumi_Amla.jpeg',
  'Brahmi.jpg',
  'Caralluma.webp',
  'Dharuhaldi.jpg',
  'Garcinia.webp',
  'Ghrit_kumari.jpeg',
  'Giloy.jpeg',
  'Gokhru.jpg',
  'Guggal.jpg',
  'Gymnema.webp',
  'Haldi.jpeg',
  'Haritaki.jpg',
  'Kalmegha.webp',
  'Karela.jpg',
  'Kasani.jpg',
  'Kaunch.jpg',
  'Majistha.webp',
  'Mandook_Parni.webp',
  'Methi.jpeg',
  'Moringa.jpg',
  'Mulethi.jpeg',
  'Neem.jpg',
  'Nirgundi.webp',
  'Noni.jpg',
  'Pashanved.jpg',
  'RETHA.jpg',
  'Safed Musali.webp',
  'Salai_Guggal.webp',
  'Sarpunkha.webp',
  'Shatavari.webp',
  'Shilajit.webp',
  'Sikakai.jpg',
  'Tulsi.webp',
  'Varuna_Chaal.webp',
  'Vasaka.webp',
  'Vijaysaar.jpeg',
]).map((item) => {
  switch (item.id) {
    case 'Herbal Extracts-Amla.jpg':
      return {
        ...item,
        name: 'Amla Dry Extract',
        description: `
Amla Dry Extract
Phyllanthus officinale | Standardized: 20% - 40%

• Amla, or Indian Gooseberry, is one of nature's richest sources of Vitamin C and antioxidants, with a dry extract standardized to 20% - 40% that supports immunity, skin health, hair strength, and overall vitality.
• Widely used in Ayurvedic and nutraceutical formulations, it promotes digestive health, liver function, and cellular protection against oxidative stress.
        `.trim(),
      }
    case 'Herbal Extracts-Ashwagandha.jpeg':
      return {
        ...item,
        name: 'Ashwagandha Dry Extract',
        description: `
Ashwagandha Dry Extract
Withania somnifera | Standardized: 2.5% - 10% Withanolides

• Ashwagandha is a revered Ayurvedic adaptogen standardized to 2.5% - 10% withanolides, clinically recognized for reducing stress and cortisol levels, improving energy, and enhancing physical and mental endurance.
• Extensively used in supplements for hormonal balance, thyroid support, male vitality, and cognitive performance, making it one of the most sought-after herbal extracts globally.
        `.trim(),
      }
    case 'Herbal Extracts-Ghrit_kumari.jpeg':
      return {
        ...item,
        name: 'Ghrit Kumari (Aloe Vera) Dry Extract',
        description: `
Ghrit Kumari (Aloe Vera) Dry Extract
Aloe vera | Standardized: 20% - 30%

• Aloe Vera dry extract, standardized to 20% - 30%, concentrates the plant's powerful healing, anti-inflammatory, and moisturizing properties into a convenient, shelf-stable powder form for nutraceutical and cosmetic use.
• Widely incorporated into skincare, digestive health, and immunity-boosting formulations for its soothing, detoxifying, and gut-supporting benefits.
        `.trim(),
      }
    case 'Herbal Extracts-Haldi.jpeg':
      return {
        ...item,
        name: 'Haldi (Curcuma Longa) Dry Extract',
        description: `
Haldi (Curcuma Longa) Dry Extract
Curcuma longa | Standardized: 5% - 10% Curcuminoids

• Turmeric dry extract standardized to 5% - 10% curcuminoids delivers a potent concentration of anti-inflammatory and antioxidant compounds widely used in joint care, immunity, and metabolic health supplement.
• A cornerstone of both Ayurvedic medicine and modern nutraceuticals, it supports liver detoxification, skin health, and chronic inflammation management.
        `.trim(),
      }
    case 'Herbal Extracts-Methi.jpeg':
      return {
        ...item,
        name: 'Methi (Fenugreek) Dry Extract',
        description: `
Methi (Fenugreek) Dry Extract
Trigonella foenum-graecum | Standardized: 20% - 40%

• Fenugreek dry extract standardized to 20% - 40% is rich in saponins and fiber, well-known for its ability to support healthy blood sugar levels, improve insulin sensitivity, and promote lactation in nursing mothers.
• Popularly used in men's health, weight management, and digestive wellness formulations for its metabolism-boosting and cholesterol-regulating properties.
        `.trim(),
      }
    case 'Herbal Extracts-Bhumi_Amla.jpeg':
      return {
        ...item,
        name: 'Bhumi Amla Dry Extract',
        description: `
Bhumi Amla Dry Extract
Phyllanthus niruri | Standardized: 2.5% - 10%

• Bhumi Amla, known as the 'stone-breaker' herb, is standardized to 2.5% - 10% and widely used in Ayurvedic formulations for liver protection, kidney stone prevention, and hepatitis support.
• Its potent hepatoprotective and diuretic properties make it a key ingredient in liver detox supplements, urinary health products, and antiviral formulations.
        `.trim(),
      }
    case 'Herbal Extracts-Gokhru.jpg':
      return {
        ...item,
        name: 'Gokhru Dry Extract',
        description: `
Gokhru Dry Extract
Tribulus terrestris | Standardized: 20% - 40% Saponins

• Gokhru (Tribulus terrestris) dry extract, standardized to 20% - 40% saponins, is a well-established herbal ingredient used to support male reproductive health, testosterone levels, and athletic performance.
• Widely recommended in sports nutrition and men's wellness products for its ability to enhance libido, improve urinary tract health, and support kidney function.
        `.trim(),
      }
    case 'Herbal Extracts-Mulethi.jpeg':
      return {
        ...item,
        name: 'Mulethi (Licorice) Dry Extract',
        description: `
Mulethi (Licorice) Dry Extract
Glycyrrhiza glabra | Standardized: 10% - 40% Glycyrrhizin

• Mulethi (Licorice root) dry extract standardized to 10% - 40% glycyrrhizin is prized for its soothing, anti-inflammatory, and expectorant properties used across respiratory, digestive, and skincare applications.
• A versatile Ayurvedic ingredient used in cough syrups, throat lozenges, skin-brightening formulations, and gut health supplements for its calming and healing effects.
        `.trim(),
      }
    case 'Herbal Extracts-Kaunch.jpg':
      return {
        ...item,
        name: 'Kaunch (Mucuna) Dry Extract',
        description: `
Kaunch (Mucuna) Dry Extract
Mucuna pruriens | Standardized: 10% - 30% L-DOPA

• Kaunch (Mucuna pruriens) dry extract, standardized to 10% - 30% L-DOPA, is a powerful natural source of levodopa, supporting dopamine production, neurological health, and male fertility.
• Widely used in supplements for Parkinson's disease management, mood enhancement, stress reduction, and male reproductive wellness due to its proven neuroendocrine benefits.
        `.trim(),
      }
    case 'Herbal Extracts-Tulsi.webp':
      return {
        ...item,
        name: 'Tulsi (Holy Basil) Dry Extract',
        description: `
Tulsi (Holy Basil) Dry Extract
Ocimum sanctum | Standardized: 5% - 20% Ursolic Acid

• Tulsi dry extract, standardized to 5% - 20% ursolic acid, is one of Ayurveda's most sacred adaptogens, known for its immune-boosting, stress-relieving, and antimicrobial properties.
• Incorporated into a wide range of health supplements, herbal teas, and skincare products for its ability to combat respiratory infections, reduce anxiety, and promote overall wellbeing.
        `.trim(),
      }
    case 'Herbal Extracts-Bhringraj.jpg':
      return {
        ...item,
        name: 'Bhringraj Dry Extract',
        description: `
Bhringraj Dry Extract
Eclipta alba | Standardized: 3% - 8%

• Bhringraj, often called the 'king of herbs' for hair care, is standardized to 3% - 8% and traditionally used to stimulate hair growth, prevent premature greying, and nourish the scalp.
• Also valued for its hepatoprotective properties, it is widely used in hair care products, liver health supplements, and Ayurvedic rejuvenation formulations.
        `.trim(),
      }
    case 'Herbal Extracts-Majistha.webp':
      return {
        ...item,
        name: 'Majishtha (Rubia) Dry Extract',
        description: `
Majishtha (Rubia) Dry Extract
Rubia cordifolia | Standardized: 10% - 30%

• Majishtha dry extract standardized to 10% - 30% is a renowned Ayurvedic blood purifier and lymphatic cleanser, widely used for skin disorders, acne, eczema, and complexion enhancement.
• Its antioxidant and anti-inflammatory properties make it a valued ingredient in skin-brightening creams, detox supplements, and formulations targeting inflammatory skin conditions.
        `.trim(),
      }
    case 'Herbal Extracts-Giloy.jpeg':
      return {
        ...item,
        name: 'Giloy Dry Extract',
        description: `
Giloy Dry Extract
Tinospora cordifolia | Standardized: 3% - 8%

• Giloy dry extract, standardized to 3% - 8%, is a powerful Ayurvedic immunomodulator known for its fever-reducing, anti-inflammatory, and antioxidant properties used across immunity and metabolic health formulations.
• Particularly valued for its anti-diabetic and anti-arthritic potential, it is widely incorporated into immune support, chronic disease management, and general wellness supplements.
        `.trim(),
      }
    case 'Herbal Extracts-Nirgundi.webp':
      return {
        ...item,
        name: 'Nirgundi Dry Extract',
        description: `
Nirgundi Dry Extract
Vitex negundo | Standardized: 3% - 6%

• Nirgundi dry extract standardized to 3% - 6% is a potent Ayurvedic anti-inflammatory and analgesic herb traditionally used for joint pain relief, arthritis, and muscle spasm management.
• Its antimicrobial and wound-healing properties also make it a valued ingredient in topical pain relief formulations, respiratory health products, and skin care preparations.
        `.trim(),
      }
    case 'Herbal Extracts-Neem.jpg':
      return {
        ...item,
        name: 'Neem Dry Extract',
        description: `
Neem Dry Extract
Azadirachta indica | Standardized: 3% - 8%

• Neem dry extract standardized to 3% - 8% is a powerful natural antibacterial, antifungal, and blood-purifying agent with centuries of use in Ayurvedic medicine for skin, oral, and immune health.
• Extensively used in skincare, dental hygiene products, anti-acne formulations, and detox supplements for its remarkable purifying and protective phytochemical profile.
        `.trim(),
      }
    case 'Herbal Extracts-Gymnema.webp':
      return {
        ...item,
        name: 'Gymnema Dry Extract',
        description: `
Gymnema Dry Extract
Gymnema sylvestre | Standardized: 25% - 80% Gymnemic Acids

• Gymnema dry extract, standardized to 25% - 80% gymnemic acids, is clinically recognized for its ability to reduce sugar absorption in the intestines, making it one of the most effective natural ingredients for blood sugar management.
• Widely used in anti-diabetic formulations, weight management supplements, and sugar-craving reduction products for its unique ability to temporarily suppress sweet taste receptors.
        `.trim(),
      }
    case 'Herbal Extracts-Shilajit.webp':
      return {
        ...item,
        name: 'Shilajit Dry Extract',
        description: `
Shilajit Dry Extract
Mineral Pitch / Asphaltum | Standardized: 2.5% - 5% Fulvic Acid

• Shilajit dry extract, standardized to 2.5% - 5% fulvic acid, is a mineral-rich adaptogenic resin known for its ability to enhance energy, stamina, cognitive function, and cellular regeneration.
• A highly prized Ayurvedic rejuvenator used in men's health, anti-aging, and performance nutrition supplements for its unique combination of fulvic acid, trace minerals, and bioactive compounds.
        `.trim(),
      }
    case 'Herbal Extracts-Ashoka.jpg':
      return {
        ...item,
        name: 'Ashoka Dry Extract',
        description: `
Ashoka Dry Extract
Saraca asoca | Standardized: 10% - 20%

• Ashoka dry extract, standardized to 10% - 20%, is a classical Ayurvedic herb used primarily for women's reproductive health, known for regulating menstrual cycles, relieving uterine disorders, and reducing menstrual pain.
• Also valued for its anti-inflammatory and antioxidant properties, it is a key ingredient in gynaecological health supplements and hormonal balance formulations.
        `.trim(),
      }
    case 'Herbal Extracts-RETHA.jpg':
      return {
        ...item,
        name: 'Retha (Soapnut) Dry Extract',
        description: `
Retha (Soapnut) Dry Extract
Sapindus mukorossi | Standardized: 20% - 40% Saponins

• Retha (Soapnut) dry extract standardized to 20% - 40% natural saponins is a gentle, plant-based surfactant and cleansing agent widely used in hair care, skin care, and natural detergent formulations.
• Its antimicrobial and anti-dandruff properties also make it a popular ingredient in herbal shampoos, scalp treatments, and eco-friendly cleaning products.
        `.trim(),
      }
    case 'Herbal Extracts-Sikakai.jpg':
      return {
        ...item,
        name: 'Sikakai Dry Extract',
        description: `
Sikakai Dry Extract
Acacia concinna | Standardized: 20% - 40%

• Sikakai dry extract standardized to 20% - 40% is a traditional Ayurvedic hair care ingredient rich in vitamins and saponins, known for its ability to cleanse the scalp, strengthen hair follicles, and add natural shine.
• Commonly used in herbal shampoos, hair masks, and scalp treatment products as a mild, chemical-free alternative to synthetic cleansers, promoting healthy and lustrous hair.
        `.trim(),
      }
    case 'Herbal Extracts-Garcinia.webp':
      return {
        ...item,
        name: 'Garcinia Dry Extract',
        description: `
Garcinia Dry Extract
Garcinia cambogia | Standardized: 50% - 70% Hydroxycitric Acid (HCA)

• Garcinia dry extract, standardized to 50% - 70% Hydroxycitric Acid (HCA), is one of the most widely researched natural weight management ingredients, known for its ability to inhibit fat synthesis and suppress appetite.
• Extensively used in weight loss supplements and metabolic health products, it supports healthy lipid profiles, reduces emotional eating, and promotes fat-burning by blocking the citrate lyase enzyme.
        `.trim(),
      }
    default:
      return item
  }
})

export const naturalFoodColors = mapFiles('Natural Food Color', [
  'Annatto.webp',
  'Anthocyanin_Colour.webp',
  'beetroot.jpeg',
  'Beta_carotene.jpeg',
  'Caramel.webp',
  'Carmine.webp',
  'Chlorophyll.webp',
  'Cucumium.jpg',
  'Pepperica.jpg',
  'Rubra_red.webp',
  'Spirulina.webp',
])
export const phytochemicals = mapFiles('Phytochemicals', [
  'Centella_Asiatica_Extract.jpeg',
  'Colchicine.jpeg',
  'Curcumin.jpeg',
  'Nicotine.jpeg',
  'Thiocolchicoside.jpeg',
  'Vinpocetine.jpeg',
]).map((item) => {
  switch (item.name) {
    case 'Colchicine':
      return {
        ...item,
        description: `
Colchicine
DMF/EDMF on record | EU Written Confirmation | WHO GMP (COPP) Available

• A powerful alkaloid derived from the Colchicum autumnale plant, widely used in the treatment of gout, familial Mediterranean fever, and pericarditis due to its potent anti-inflammatory action.
• Backed by full regulatory documentation including DMF/EDMF on record and EU-written WHO GMP (COPP) confirmation, ensuring the highest standards of pharmaceutical-grade quality and compliance.
        `.trim(),
      }
    case 'Thiocolchicoside':
      return {
        ...item,
        description: `
Thiocolchicoside (DMF)
DMF on record | EU Written Confirmation | WHO GMP (COPP) Available

• A semi-synthetic muscle relaxant and anti-inflammatory agent derived from colchicine, widely prescribed for the relief of muscle spasms, contractures, and painful musculoskeletal conditions.
• Supported by a Drug Master File (DMF) on record and EU-written WHO GMP (COPP) confirmation, this grade meets stringent international pharmaceutical manufacturing and export standards.

Thiocolchicoside (EDMF)
EDMF on record

• An European Drug Master File (EDMF) variant of thiocolchicoside, ensuring full regulatory compliance for muscle relaxant formulations destined for European pharmaceutical markets.
• Produced under rigorous quality controls, this grade offers transparency in manufacturing processes, making it a trusted active ingredient for EU-registered medicinal products.
        `.trim(),
      }
    case 'Vinpocetine':
      return {
        ...item,
        description: `
Vinpocetine
EDMF on record | EU Written Confirmation | WHO GMP (COPP) Available

• A synthetic derivative of the periwinkle plant alkaloid vincamine, known for its neuroprotective properties and ability to enhance cerebral blood flow, memory, and cognitive function.
• Certified with EDMF on record and EU-written WHO GMP (COPP) confirmation, this premium-grade vinpocetine is ideal for neurological, cognitive health, and dietary supplement formulations.
        `.trim(),
      }
    case 'Nicotine':
      return {
        ...item,
        description: `
Nicotine
EDMF on record

• A naturally occurring alkaloid found in tobacco plants, used extensively in nicotine replacement therapy (NRT) products such as patches, gums, and lozenges to support smoking cessation.
• Manufactured with an EDMF on record, ensuring full traceability and compliance with European regulatory requirements for pharmaceutical-grade active substance documentation.
        `.trim(),
      }
    case 'Curcumin':
      return {
        ...item,
        description: `
Curcumin
DMF on record | WHO GMP (COPP)

• A bioactive polyphenolic compound extracted from turmeric (Curcuma longa), celebrated globally for its powerful antioxidant, anti-inflammatory, and potential anticancer properties.
• Available with a Drug Master File (DMF) on record and WHO GMP (COPP) certification, ensuring pharmaceutical-grade purity suitable for nutraceutical, cosmetic, and medicinal applications.
        `.trim(),
      }
    case 'Centella Asiatica Extract':
      return {
        ...item,
        description: `
Centella Asiatica Extract

• A potent botanical extract derived from the Centella asiatica herb, renowned in both traditional Ayurvedic medicine and modern dermatology for its wound-healing, collagen-stimulating, and skin-soothing properties.
• Widely used in premium skincare, anti-aging formulations, and nutraceutical products for its ability to promote skin regeneration, improve microcirculation, and reduce the appearance of scars and stretch marks.
        `.trim(),
      }
    default:
      return item
  }
})

