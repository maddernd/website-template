const id = "products/company-operations/projects/docusaurus-documentation/Spike Outcome_Hosting Docusaurus on Render.md";
						const collection = "docs";
						const slug = "products/company-operations/projects/docusaurus-documentation/spike-outcome_hosting-docusaurus-on-render";
						const body = "\n==================\n\n**Spike:** 1\n\n**Title:** Docusaurus Hosting\n\n**Author:** Onyedikachi Okorie\n\n## Goals / Deliverables\n\nThe goal of this report is to determine if Docusaurus website can be hosted on a free hosting\nplatform called **Render**.\n\n## Technologies, Tools, and Resources used\n\n- Project Repository: GitHub\n- Hosting Platform: Render\n- Text Editor: VsCode\n\n## Tasks undertaken for Test 1\n\nThe following steps were used to test the publishing of docusaurus website on render.\n\n1. Navigate to [https://render.com/](https://render.com/), you would be presented with a page to\n   sign up or sign in. You can sign in using Google.\n2. It takes you to a dashboard, select New at the top right corner and choose Web Service.\n   ![New button](/render-tut-2.png)\n3. On the next page, input the GitHub repository. The repository used for this test was,\n   [https://github.com/thoth-tech/Company-Operations/tree/main/Projects/docusaurus-website](https://github.com/thoth-tech/Company-Operations/tree/main/Projects/docusaurus-website)\n4. Input the link and click continue. ![Input link](/render-tut-1.png)\n5. Input the following values to configure the web service.\n   - Name: Docusaurus Hosting\n   - Branch: main\n   - Runtime: Node\n   - Build Command: npm install\n   - Start Command: npm start\n   - Click Create Service\n\n## Tasks undertaken for Test 2\n\n1. Sign into renders dashboard.\n2. On the top right corner, select New and choose Static Website.\n3. On the next page, input the GitHub repository. The repository used for this test was,\n   [https://github.com/thoth-tech/Company-Operations](https://github.com/thoth-tech/Company-Operations)\n4. Input the following details to configure the service\n   - Name: Docusaurus Hosting1\n   - Branch: main\n   - Root Directory: [Projects/docusaurus-website](Projects/docusaurus-website)\n   - Build command: yarn install; yarn build\n   - Publish directory: ./build\n\n## What we found out\n\nThe test was unsuccessful for both Test 1 and 2. In Test 1, the build executed successfully but on\nthe run command it fails.\n\n- Successful build ![Input link](/render-tut-3.png)\n- Failed run ![Input link](/render-tut-4.png)\n\nFor Test 2, the deployment server was successfully started but the build failed. Failed run\n![Input link](/render-tut-5.png)\n\nAfter testing with a different GitHub repository that contained the docusaurus website\nconfiguration, the build was successful and Render logs showcased the Site as being live. However,\non going to the provided URL, it shows the message \"Not found.\" ![Input link](/render-tut-6.png)\n\nThe failure could be because Render has not been given permission to our repository.\n\n## Open issues\n\n- Render does not have required permission to our repository.\n- On navigating to the link provided by Render for the Live site which deployed successfully, it\n  gives a \"Not found\" error message. ![Input link](/render-tut-7.png)\n\n## Recommendations\n\n- Grant Render **write** permission to our repository.\n- Explore and test other free hosting platforms.\n- Do more research on hosting docusaurus on Render.\n";
						const data = {title:"Spike Outcome_Hosting Docusaurus on Render",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/products/company-operations/projects/docusaurus-documentation/Spike Outcome_Hosting Docusaurus on Render.md",
							rawData: "\ntitle: Spike Outcome_Hosting Docusaurus on Render",
						};

export { _internal, body, collection, data, id, slug };