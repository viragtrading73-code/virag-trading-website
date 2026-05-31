import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const productsDir = path.join(process.cwd(), 'src/content/products');
const files = fs.readdirSync(productsDir).filter(f => f.endsWith('.md'));

const productData = {
  'air-bubble-roll': {
    subcategory: 'Protective Packaging',
    extraFaqs: [
      { question: 'What materials are used to manufacture Air Bubble Rolls?', answer: 'Our Air Bubble Rolls are manufactured from premium-grade polyethylene (PE) film, ensuring maximum durability and cushioning.' },
      { question: 'Are these bubble rolls suitable for heavy industrial items?', answer: 'Yes, we provide heavy-duty bubble rolls with robust air retention designed specifically to protect heavy industrial and mechanical parts.' },
      { question: 'Can I order custom width and length sizes?', answer: 'Absolutely. We offer standard widths like 500mm to 1500mm, and can fully customize dimensions based on your specific bulk requirements.' },
      { question: 'Do Air Bubble Rolls offer moisture resistance?', answer: 'Yes, the polyethylene material naturally repels water and moisture, adding an extra layer of environmental protection during transit.' },
      { question: 'How do I choose the correct bubble size for my products?', answer: 'For smaller, fragile items, our standard 10mm bubble is ideal. For larger, heavier goods, we recommend our larger bubble options for enhanced shock absorption.' }
    ]
  },
  'bopp-tape': {
    subcategory: 'Packaging Tapes',
    extraFaqs: [
      { question: 'What is the adhesive strength of your BOPP tapes?', answer: 'Our BOPP tapes use high-tack acrylic or hot-melt adhesives, offering exceptional holding power for both lightweight and heavy cartons.' },
      { question: 'Are custom printed BOPP tapes available?', answer: 'Yes, we offer custom printing on BOPP tapes, allowing you to display your company logo, handling instructions, or brand messaging.' },
      { question: 'Do these tapes perform well in extreme temperatures?', answer: 'Our BOPP tapes are designed to withstand a wide range of temperatures, making them suitable for standard warehousing as well as export shipping.' },
      { question: 'What micron thicknesses do you supply?', answer: 'We supply BOPP tapes in various thicknesses, typically ranging from 38 microns to 50+ microns, depending on the required tensile strength.' },
      { question: 'Can these tapes be used with automated carton sealers?', answer: 'Yes, our machine-grade BOPP tape rolls are perfectly compatible with automated taping machines for high-speed packaging lines.' }
    ]
  },
  'corrugated-sheet': {
    subcategory: 'Corrugated Packaging',
    extraFaqs: [
      { question: 'What ply options are available for corrugated sheets?', answer: 'We offer 2-ply, 3-ply, 5-ply, and 7-ply corrugated sheets to meet varying levels of cushioning and structural requirements.' },
      { question: 'Are these sheets made from recycled kraft paper?', answer: 'Yes, our corrugated sheets are manufactured using high-quality, eco-friendly recycled kraft paper without compromising on strength.' },
      { question: 'Can corrugated sheets be used for floor protection?', answer: 'Absolutely. Many of our clients use our heavy-duty corrugated sheets to protect flooring during construction or painting projects.' },
      { question: 'Do you provide die-cut corrugated sheets?', answer: 'Yes, we can provide custom die-cut sheets tailored to fit your specific product dimensions or packaging inserts.' },
      { question: 'How do corrugated sheets absorb impact?', answer: 'The inner fluted layer of the corrugated sheet acts as a structural cushion, distributing weight and absorbing shocks effectively during transit.' }
    ]
  },
  'jute-kantan': {
    subcategory: 'Jute Products',
    extraFaqs: [
      { question: 'What is Jute Kantan primarily used for?', answer: 'Jute Kantan is a highly durable hessian cloth primarily used for packaging agricultural goods, hardware, and textiles.' },
      { question: 'Is Jute Kantan biodegradable?', answer: 'Yes, being made from 100% natural jute fibers, it is completely biodegradable and an environmentally friendly packaging choice.' },
      { question: 'What are the standard weave structures available?', answer: 'We provide various weave densities (Porter x Shots) depending on the load-bearing requirements of the items being packed.' },
      { question: 'Does Jute Kantan allow for air circulation?', answer: 'Yes, the breathable woven structure of Jute Kantan prevents moisture buildup, making it ideal for storing grains and agricultural produce.' },
      { question: 'Can Jute Kantan be stitched easily for custom bags?', answer: 'Absolutely. The fabric is flexible and strong, allowing it to be easily cut and stitched into custom-sized bags or coverings.' }
    ]
  },
  'jute-sutli-twine': {
    subcategory: 'Jute Products',
    extraFaqs: [
      { question: 'What is the tensile strength of Jute Sutli?', answer: 'Jute Sutli offers excellent tensile strength, making it highly reliable for securely tying heavy bundles, cartons, and agricultural goods.' },
      { question: 'Is Jute Sutli treated with any harmful chemicals?', answer: 'No, our Jute Sutli is completely natural and eco-friendly, making it safe for use in agriculture and food-related bundling.' },
      { question: 'What ply variations of Jute Twine do you supply?', answer: 'We supply various thicknesses, from 2-ply up to heavy-duty multi-ply twine, catering to different industrial tying applications.' },
      { question: 'Can it be used in automated tying machines?', answer: 'Yes, our uniformly spun Jute Sutli spools are designed to run smoothly on standard industrial tying and bundling machines.' },
      { question: 'How is Jute Sutli packaged for bulk orders?', answer: 'We supply Jute Sutli in convenient rolls, spools, or hanks, packed securely in bulk bags to prevent tangling during transit.' }
    ]
  },
  'ld-foam-sheet-roll': {
    subcategory: 'Protective Packaging',
    extraFaqs: [
      { question: 'What is the difference between LD Foam and Air Bubble Roll?', answer: 'LD Foam provides a smooth, non-abrasive cushioning surface ideal for preventing scratches, while Bubble Roll is better for deep impact shock absorption.' },
      { question: 'Can LD Foam be used for thermal insulation?', answer: 'Yes, LDPE foam has closed-cell structures that provide excellent thermal insulation, making it useful in construction and temperature-sensitive packaging.' },
      { question: 'Is the foam material water-resistant?', answer: 'Absolutely. Our LD Foam sheets and rolls are completely moisture-resistant, protecting your products from water damage and humidity.' },
      { question: 'Do you offer anti-static LD Foam for electronics?', answer: 'Yes, we provide specialized anti-static (pink) LD Foam rolls designed specifically for packaging sensitive electronic components.' },
      { question: 'How easily can LD Foam be cut to size?', answer: 'LD Foam is highly flexible and easy to cut with standard industrial knives or die-cutting machines for custom packaging inserts.' }
    ]
  },
  'packing-hand-tool': {
    subcategory: 'Packaging Machines',
    extraFaqs: [
      { question: 'What strap materials are compatible with these hand tools?', answer: 'Our manual packing hand tools are fully compatible with both Polypropylene (PP) and Polyester (PET) strapping rolls.' },
      { question: 'Does the tool perform tensioning and sealing?', answer: 'Yes, we provide combined tensioner and sealer tools, as well as separate dedicated tensioners and crimping tools depending on your workflow.' },
      { question: 'What maintenance is required for manual strapping tools?', answer: 'They require minimal maintenance. Occasional lubrication of moving parts and keeping the gripping gears clean ensures long-lasting performance.' },
      { question: 'Can these tools be used for round or irregular packages?', answer: 'Yes, we offer specialized tensioners designed specifically to secure straps tightly around round or irregularly shaped industrial loads.' },
      { question: 'Are replacement parts easily available?', answer: 'Yes, we stock all essential replacement components like gripping wheels and cutter blades for our packing hand tools.' }
    ]
  },
  'packing-seal-clip': {
    subcategory: 'Strapping Accessories',
    extraFaqs: [
      { question: 'What are packing seals made of?', answer: 'Our packing seals are manufactured from premium-grade galvanized steel or high-tensile metal to ensure maximum joint efficiency.' },
      { question: 'Are these clips suitable for both PP and PET straps?', answer: 'Yes, we offer serrated seals for PET straps to prevent slippage, and smooth/semi-open seals for standard PP strapping.' },
      { question: 'How do serrated seals differ from smooth seals?', answer: 'Serrated seals have internal grips that bite into the hard PET strap, offering superior holding power for heavy-duty applications compared to smooth seals.' },
      { question: 'What widths of packing clips do you supply?', answer: 'We supply seals ranging from 12mm to 19mm, matching all standard industrial strapping widths perfectly.' },
      { question: 'Can these clips rust during export shipping?', answer: 'Our galvanized packing seals are highly rust-resistant, making them perfectly safe for long-term storage and maritime export shipments.' }
    ]
  },
  'pet-strapping-roll': {
    subcategory: 'Strapping Solutions',
    extraFaqs: [
      { question: 'Why choose PET strapping over steel strapping?', answer: 'PET strapping offers comparable strength to steel but is much safer to handle, lighter, rust-proof, and more cost-effective.' },
      { question: 'What is the breaking strength of your PET straps?', answer: 'Depending on the width and thickness, our heavy-duty PET straps can sustain break loads from 250 kg up to over 1000 kg.' },
      { question: 'Is PET strapping UV resistant?', answer: 'Yes, PET material naturally resists UV degradation, making it highly suitable for outdoor storage of pallets and building materials.' },
      { question: 'Can PET strapping be heat-sealed?', answer: 'Absolutely. PET straps melt and fuse seamlessly when used with friction-weld pneumatic or battery-operated strapping machines.' },
      { question: 'Does the strap retain tension over time?', answer: 'Yes, PET strapping has excellent elongation recovery, meaning it will stay tight around the package even if the load shifts slightly.' }
    ]
  },
  'plastic-hm-roll': {
    subcategory: 'Plastic Packaging Films',
    extraFaqs: [
      { question: 'What does HM stand for in HM Roll?', answer: 'HM stands for High Molecular (weight) High-Density Polyethylene, which gives the film its characteristic high tensile strength and crinkly texture.' },
      { question: 'Is HM film food-safe?', answer: 'Yes, our virgin-grade Plastic HM Rolls are food-safe and commonly used in the grocery and food processing industries.' },
      { question: 'What is the typical thickness of HM Rolls?', answer: 'We supply HM Rolls in various thicknesses, typically starting from very thin microns up to heavy-duty industrial gauges, as per client requirements.' },
      { question: 'Can HM Rolls be used for heat shrinking?', answer: 'No, HM films do not shrink under heat. For shrink packaging, we recommend our specialized LDPE or POF shrink films.' },
      { question: 'Do you offer HM Rolls in different colors?', answer: 'Our standard is milky white or transparent, but we can manufacture custom-colored HM Rolls for bulk industrial orders.' }
    ]
  },
  'plastic-ld-bag': {
    subcategory: 'Plastic Packaging Bags',
    extraFaqs: [
      { question: 'What are the main advantages of LDPE bags?', answer: 'LDPE (Low-Density Polyethylene) bags are highly flexible, transparent, tear-resistant, and provide an excellent moisture barrier for stored goods.' },
      { question: 'Can these bags be heat sealed?', answer: 'Yes, Plastic LD Bags can be quickly and securely sealed using standard impulse heat sealers.' },
      { question: 'Do you supply custom printed LD Bags?', answer: 'Yes, we offer rotogravure printing services to customize your LD bags with branding, warnings, or product information.' },
      { question: 'Are these bags suitable for textile packaging?', answer: 'Absolutely. They are widely used in the Surat textile industry for packing sarees, garments, and fabrics safely.' },
      { question: 'Are your LD bags recyclable?', answer: 'Yes, our LD bags are 100% recyclable, supporting sustainable waste management practices.' }
    ]
  },
  'plastic-sutali': {
    subcategory: 'Plastic Twine',
    extraFaqs: [
      { question: 'Is Plastic Sutali stronger than Jute Sutli?', answer: 'Yes, being made of polypropylene, Plastic Sutali offers significantly higher tensile strength and is completely immune to rotting or moisture damage.' },
      { question: 'What industries use Plastic Sutali the most?', answer: 'It is extensively used in the textile, agriculture, hardware, and logistics sectors for heavy-duty tying and bundling.' },
      { question: 'Does Plastic Sutali cut into the packaging?', answer: 'Our Plastic Sutali is manufactured with a smooth finish to minimize friction and prevent it from cutting into cardboard boxes or soft materials.' },
      { question: 'Are different colors available for inventory coding?', answer: 'Yes, we supply Plastic Sutali in vibrant colors like Red, Blue, Green, and Yellow to help with warehouse color-coding.' },
      { question: 'How much does a standard spool weigh?', answer: 'We offer various spool weights, typically ranging from 200 grams up to bulk 2 kg cones for industrial usage.' }
    ]
  },
  'plastic-tarpaulin': {
    subcategory: 'Protective Coverings',
    extraFaqs: [
      { question: 'Is the Plastic Tarpaulin 100% waterproof?', answer: 'Yes, our tarpaulins are manufactured with multiple layers of HDPE fabric and LDPE lamination, making them completely waterproof.' },
      { question: 'Are the edges reinforced?', answer: 'Yes, all our tarpaulins feature heat-sealed edges reinforced with strong nylon ropes for added tear resistance during tying.' },
      { question: 'Do the tarpaulins come with eyelets?', answer: 'Absolutely. We install rust-proof aluminum eyelets at regular intervals along the borders for easy and secure tie-downs.' },
      { question: 'Can it withstand harsh sunlight?', answer: 'Yes, our premium tarpaulins are UV-stabilized, preventing the plastic from degrading or becoming brittle under direct sunlight.' },
      { question: 'What GSM variants are available?', answer: 'We supply tarpaulins across a wide range of weights, from lightweight 90 GSM for temporary covers to heavy-duty 300+ GSM for truck covers.' }
    ]
  },
  'pneumatic-strapping-machine': {
    subcategory: 'Packaging Machines',
    extraFaqs: [
      { question: 'What air pressure is required to operate the machine?', answer: 'Our pneumatic strapping machines typically operate optimally at an air pressure range of 0.5 to 0.8 MPa (70 to 115 psi).' },
      { question: 'Does this machine use friction welding?', answer: 'Yes, the machine uses high-frequency friction welding to fuse the PET/PP strap ends together, eliminating the need for metal seals.' },
      { question: 'How fast is the strapping cycle?', answer: 'The entire process of tensioning, sealing, and cutting takes only 3 to 5 seconds, massively boosting packaging line productivity.' },
      { question: 'Can it be suspended from a balancer?', answer: 'Yes, our machines come with a suspension bracket, allowing them to be hung from a spring balancer to reduce operator fatigue.' },
      { question: 'What maintenance does the pneumatic tool need?', answer: 'Daily maintenance includes keeping the air supply dry, adding pneumatic oil through the lubricator, and cleaning the tension wheel with compressed air.' }
    ]
  },
  'pp-strapping-roll': {
    subcategory: 'Strapping Solutions',
    extraFaqs: [
      { question: 'What is the difference between Manual and Machine grade PP strap?', answer: 'Machine grade PP strap has higher dimensional precision and a smoother surface to prevent jamming in automated strapping machines, while manual grade is thicker for hand tools.' },
      { question: 'Can PP strapping be printed with our logo?', answer: 'Yes, we provide custom printing on PP strapping rolls for brand visibility and security against tampering.' },
      { question: 'What is the core size of the rolls?', answer: 'Our standard core sizes are 200mm and 406mm, which fit universally on all standard strapping dispensers and semi-auto machines.' },
      { question: 'Is PP strap suitable for outdoor storage?', answer: 'Standard PP strap degrades under prolonged UV exposure. For long-term outdoor storage, we recommend our UV-treated PP strap or PET strapping.' },
      { question: 'How much strap is in a standard roll?', answer: 'Depending on the width and thickness, a standard machine-grade PP strapping roll can contain anywhere from 1000 to 3000 meters of strap.' }
    ]
  },
  'pp-woven-fabric-bag': {
    subcategory: 'Woven Packaging',
    extraFaqs: [
      { question: 'Are PP woven bags breathable?', answer: 'Yes, unlaminated PP woven bags are breathable, making them perfect for agricultural products that require air circulation.' },
      { question: 'Do you offer laminated PP woven bags?', answer: 'Absolutely. We offer laminated bags that provide a moisture barrier and prevent fine powders (like cement or flour) from leaking out.' },
      { question: 'Can the bags hold heavy weights?', answer: 'Yes, our high-density woven bags are incredibly strong and are routinely used to carry 25kg, 50kg, and even 100kg loads without tearing.' },
      { question: 'Are custom dimensions and printing available?', answer: 'Yes, we manufacture bags to your exact size specifications and offer high-quality multi-color flexographic printing.' },
      { question: 'Do you supply PP woven fabric in roll form?', answer: 'Yes, we supply continuous PP woven fabric rolls for customers who wish to cut and stitch the material themselves or use it for wrapping.' }
    ]
  },
  'stretch-film': {
    subcategory: 'Protective Packaging',
    extraFaqs: [
      { question: 'What is the stretchability percentage of your film?', answer: 'Our premium stretch films offer an elongation capacity of 150% to over 300%, ensuring tight, secure pallet wrapping.' },
      { question: 'What is the difference between Hand Grade and Machine Grade film?', answer: 'Hand grade film is shorter and lighter for manual wrapping, while machine grade film is longer, highly stretchable, and designed for automated pallet wrappers.' },
      { question: 'Does stretch film leave a sticky residue?', answer: 'No, stretch film only clings to itself and will not leave any adhesive residue on your products or boxes.' },
      { question: 'Do you offer opaque or colored stretch films?', answer: 'Yes, we supply black and colored opaque stretch films which are excellent for concealing valuable shipments and color-coding pallets.' },
      { question: 'Is the film puncture-resistant?', answer: 'Yes, our multi-layer cast stretch films are highly puncture and tear-resistant, ideal for wrapping irregularly shaped industrial parts.' }
    ]
  }
};

for (const file of files) {
  const filePath = path.join(productsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Basic frontmatter extraction
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) continue;
  
  const frontmatterRaw = match[1];
  const markdownBody = content.slice(match[0].length);
  
  let data = yaml.load(frontmatterRaw);
  const slug = file.replace('.md', '');
  
  // Apply validations and upgrades
  data.slug = slug;
  if (!data.category) data.category = 'Packaging Materials';
  
  const productInfo = productData[slug];
  data.subcategory = productInfo ? productInfo.subcategory : 'Industrial Packaging';
  
  if (!data.metaTitle) data.metaTitle = `${data.title} | Virag Trading Co.`;
  if (!data.metaDescription) {
    data.metaDescription = data.description.substring(0, 150) + (data.description.length > 150 ? '...' : '');
  }
  
  if (!data.keywords || data.keywords.length === 0) data.keywords = [data.title, `${data.title} Supplier`];
  if (!data.images || data.images.length === 0) data.images = [`/images/products/${slug}.jpg`];
  if (!data.applications || data.applications.length === 0) data.applications = ['Industrial Packaging'];
  
  if (!data.faq) data.faq = [];
  
  // Ensure 5 unique FAQs
  if (data.faq.length < 5 && productInfo && productInfo.extraFaqs) {
    const needed = 5 - data.faq.length;
    for (let i = 0; i < needed; i++) {
      if (productInfo.extraFaqs[i]) {
        // Prevent duplicate questions
        if (!data.faq.find(f => f.question === productInfo.extraFaqs[i].question)) {
          data.faq.push(productInfo.extraFaqs[i]);
        }
      }
    }
  }
  
  // Fallback if still less than 5
  let counter = 1;
  while (data.faq.length < 5) {
    data.faq.push({
      question: `What are the typical applications of ${data.title}? (Question ${counter})`,
      answer: `Our ${data.title} is highly versatile and used across various industrial and commercial sectors for secure and reliable operations.`
    });
    counter++;
  }
  
  const newFrontmatter = yaml.dump(data, { lineWidth: -1 });
  const newContent = `---\n${newFrontmatter}---\n${markdownBody}`;
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${file}`);
}
