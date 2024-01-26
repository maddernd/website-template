import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_c5329516.mjs';
import 'clsx';

const html = "<h3 id=\"welcome-aboard\">Welcome aboard!</h3>\n<p>We’re thrilled to have you on this journey. This agreement marks the collaborative spirit between\nyou - our enthusiastic participant – and Thoth Tech.</p>\n<h3 id=\"our-objective\">Our Objective:</h3>\n<p>Our aim is to create an environment where enthusiastic participants can invest extra hours, blending\ncreativity and expertise to craft something truly exceptional. This project isn’t just about grades;\nit’s an opportunity to create something you will be proud of long after your studies.</p>\n<h3 id=\"commitments\">Commitments:</h3>\n<ol>\n<li><b>Time Commitment</b>: We agree to dedicating additional time, bringing our best efforts to the\ntable each week.</li>\n<li><b>Regular Meetings</b>: We’ll meet consistently and promptly to discuss progress, address\nchallenges, and plan our collective next steps.</li>\n<li><b>Task Allocation</b>: Leveraging our unique strengths, we’ll assign roles that match our skills\nand trust each other to effectively fulfill these roles within set timelines.</li>\n<li><b>Open Communication</b>: Transparent and responsive communication remains essential. We’ll stay\nin touch regularly through our preferred channels.</li>\n<li><b>Documenting the Journey</b>: Maintaining a record of our project’s journey is vital. We’ll\ndocument requirements, track progress, and shares updates along the way.</li>\n<li><b>Quality Assurance</b>: Quality is non-negotiable. Regular checks and reviews will ensure our\nwork meets Thoth Tech’s high standards.</li>\n<li><b>Duration</b>: This agreement is effective from the moment we sign it and will go on until the\nend of trimester 3. If needed, extensions may be discussed depending on project’s requirements.</li>\n</ol>\n<h3 id=\"if-things-dont-go-as-planned\">If Things Don’t Go as Planned:</h3>\n<p>We understand that life happens. If sticking to these commitments becomes challenging, let’s talk\nand find a solution together. No penalties – just support.</p>\n<h3 id=\"lets-get-started\">Let’s Get Started!</h3>\n<p>This isn’t just an agreement; it’s our commitment to collaborate and create something phenomenal.\nLet’s kick-start this journey together!</p>";

				const frontmatter = {"title":"Enthusiastic Participant Agreement"};
				const file = "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/policies/Enthusiastic Participant Agreement.md";
				const url = undefined;
				function rawContent() {
					return "\n### Welcome aboard!\n\nWe're thrilled to have you on this journey. This agreement marks the collaborative spirit between\nyou - our enthusiastic participant – and Thoth Tech.\n\n### Our Objective:\n\nOur aim is to create an environment where enthusiastic participants can invest extra hours, blending\ncreativity and expertise to craft something truly exceptional. This project isn't just about grades;\nit's an opportunity to create something you will be proud of long after your studies.\n\n### Commitments:\n\n1. <b>Time Commitment</b>: We agree to dedicating additional time, bringing our best efforts to the\n   table each week.\n2. <b>Regular Meetings</b>: We’ll meet consistently and promptly to discuss progress, address\n   challenges, and plan our collective next steps.\n3. <b>Task Allocation</b>: Leveraging our unique strengths, we'll assign roles that match our skills\n   and trust each other to effectively fulfill these roles within set timelines.\n4. <b>Open Communication</b>: Transparent and responsive communication remains essential. We’ll stay\n   in touch regularly through our preferred channels.\n5. <b>Documenting the Journey</b>: Maintaining a record of our project’s journey is vital. We'll\n   document requirements, track progress, and shares updates along the way.\n6. <b>Quality Assurance</b>: Quality is non-negotiable. Regular checks and reviews will ensure our\n   work meets Thoth Tech’s high standards.\n7. <b>Duration</b>: This agreement is effective from the moment we sign it and will go on until the\n   end of trimester 3. If needed, extensions may be discussed depending on project’s requirements.\n\n### If Things Don't Go as Planned:\n\nWe understand that life happens. If sticking to these commitments becomes challenging, let’s talk\nand find a solution together. No penalties – just support.\n\n### Let's Get Started!\n\nThis isn't just an agreement; it’s our commitment to collaborate and create something phenomenal.\nLet’s kick-start this journey together!\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"welcome-aboard","text":"Welcome aboard!"},{"depth":3,"slug":"our-objective","text":"Our Objective:"},{"depth":3,"slug":"commitments","text":"Commitments:"},{"depth":3,"slug":"if-things-dont-go-as-planned","text":"If Things Don’t Go as Planned:"},{"depth":3,"slug":"lets-get-started","text":"Let’s Get Started!"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };