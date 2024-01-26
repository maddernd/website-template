const id = "reference/faq.mdx";
						const collection = "docs";
						const slug = "reference/faq";
						const body = "\nWelcome to Thoth Techs Frequently Asked Questions (FAQ) section! We understand that you might have\nqueries about contributing in Thoth Tech or seek clarification on how to use certain tools. Our aim\nis to provide you with comprehensive and straightforward answers to address your concerns promptly.\n\n<details>\n  <summary>Where can I find the link to Thoth Tech GitHub channel</summary>\n\n  Find link [here](https://github.com/thoth-tech/).\n</details>\n\n<details>\n  <summary>Which Thoth Tech repository should I clone to contribute to the Documentation Website</summary>\n\n  To contribute to the Documentation Website, locate the [\"Thothtech-Documentation-Website\" repository](https://github.com/thoth-tech/ThothTech-Documentation-Website/tree/main),\n  navigate to the src/content/docs, and upload your .md or .mdx file to the relevant folder.\n</details>\n\n<details>\n  <summary>When I attempt to run the documentation website locally, it says \"The .nvmrc file is using a\n    version of node that is not supported by astro anymore\". Please how do I fix this?</summary>\n\n  Re-install or upgrade the version of Node.js software on your laptop.\n</details>\n\n<details>\n  <summary>How do I make a newly created folder to appear on the side navbar of the Documentation website?</summary>\n\n  On the astro.config.mjs file, create a new label (if main folder) or item(if sub folder). You do not\n  need to reinvent the will, you can copy from what already exists on the astro.config.mjs file, insert\n  the copied block into the right location, and modify the labels and directory link.\n</details>\n\n<details>\n  <summary>Is there a video that helps me understand how to migrate documents to the Documentation website?</summary>\n\n  Yes, there is. Find some helpful links below. \n  - [Instructional video](https://deakin365.sharepoint.com/:v:/r/sites/ThothTech2/Shared%20Documents/General/Instructional%20Video%20-%20How%20To%20Upload%20Documents%20to%20Starlight.mp4?csf=1&web=1&e=s26lMo).\n  - [Help hub session recording](https://deakin365-my.sharepoint.com/:v:/g/personal/s221460489_deakin_edu_au/EXib27xJI2hCkHpzBXOxxYQBOfDGhhQJ1A23ciisMROeRA?xsdata=MDV8MDF8fDgxMTZlNDYzMzAyZTQxYTZhNGE2MDhkYmYyMWMwMGY1fGQwMjM3OGVjMTY4ODQ2ZDU4NTQwMWMyOGI1ZjQ3MGY2fDB8MHw2MzgzNjk5NzQyOTIxNjE3MDJ8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxMM1JsWVcxekx6RTVPbEZtZUY5VFZFaFZPVEJQYzFaWlFraFdXVXRvYzFKUk5XZHRSV1V3Y3psUk5tdFBjRUptTm1Kc2FUZ3hRSFJvY21WaFpDNTBZV04yTWk5amFHRnVibVZzY3k4eE9UcFJabmhmVTFSSVZUa3dUM05XV1VKSVZsbExhSE5TVVRWbmJVVmxNSE01VVRaclQzQkNaalppYkdrNE1VQjBhSEpsWVdRdWRHRmpkakl2YldWemMyRm5aWE12TVRjd01UUXdNRFl5T0RNd01nPT18NTg0ZjIwNWZmZjA3NGZlZTQyNjQwOGRiZjIxYzAwZjN8ZTU2N2Y4NzA4YjFlNDI1YWIzYjRhM2I1NmExY2QwMjE%3D&sdata=TldtNGVnTDJWWlVnb2lBMGlZZXlLNEI1M2p5emU3ZndBYmpSTkV6MnN0QT0%3D)\n</details>\n\n<details>\n  <summary>What do I do to resolve Linelint issues in the CI build checks for my Pull Request?</summary>\n\n  Identify the file which has the lint issue from the details section of the CI Build check. Open the\n  identified file on Visual Studio code or your editor of choice, right click on the document and select\n  Format document with markdownlint. Ensure that you have the markdownlint extension installed on your\n  code editor.\n</details>\n\n<details>\n  <summary>What do I do to resolve Prettier issues in the CI build checks for my Pull Request?</summary>\n\n  Identify the file which has the prettier issue from the details section of the CI Build check. Open\n  the identified file on Visual Studio code or your editor of choice, right click on the document and\n  select Format document with Prettier. Ensure that you have the Prettier extension installed on your\n  code editor.\n</details>\n\n<details>\n  <summary>My Pull request keeps failing the netlify checks</summary>\n\n  In such instances, the primary reason is often due to the absence of a title block at the start of your markdown file.\n  For example. \n  ``` \n  title: Frequently Asked Questions (FAQ) \n  description: Frequently Asked Questions \n  ```\n</details>\n";
						const data = {title:"Frequently Asked Questions (FAQ)",description:"Frequently Asked Questions",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/reference/faq.mdx",
							rawData: "\ntitle: Frequently Asked Questions (FAQ)\ndescription: Frequently Asked Questions",
						};

export { _internal, body, collection, data, id, slug };