export const siteData = `
<url>
<loc>
https://benmendis.vercel.app/
</loc>
<title>Ben's personal website</title>
<desc>My website where I implement the most cutting edge of web technologies while adhering to industry best practices and web standards</desc>
<content>
    <technologies>
    <frontend>
        <list>
            <li>Next.js 13</li>
            <li>React 18</li>
            <li>Redux/RTK</li>
            <li>Tanstack/React Query</li>
            <li>Axios</li>
            <li>Jest</li>
            <li>Tailwind CSS</li>
            <li>React Hook Form</li>
            <li>Framer Motion</li>
            <li>Docker</li>
        </list>
    </frontend>
    <backend>
        <list>
            <li>Express.js</li>
            <li>Next Auth</li>
            <li>Zod</li>
            <li>Prisma</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Google Firebase</li>
            <li>PlanetScale</li>
            <li>AWS</li>
            <li>OpenAI</li>
        </list>
    </backend>
    </technologies>
</content>
</url>

<url>
<loc>https://benmendis.vercel.app/portfolio</loc>
<desc>A collection of Ben's projects</desc>
</url>

<url>
<loc>https://book-store-bcmendis.vercel.app/</loc>
<content>
    <project>
        <title>BlazeBooks</title>
        <desc>An online bookstore allowing users to add, delete & edit books</desc>
        <technicalDescription>
        This project uses Next.js & Redux Toolkit.
        It leverages server-side rendering(SSR) to fetch an array of books, to initialize the Redux store
        </technicalDescription>
        <technologies>
            <li>Next.js</li>
            <li>Redux ToolKit</li>
            <li>Next Redux Wrapper</li>
            <li>React Hook Forms</li>
            <li>CRUD operations</li>
        </technologies>
    </project>
</content>
</url>

<url>
<loc>https://blog-query-bcmendis.vercel.app/</loc>
<content>
    <project>
        <title>Blog-it</title>
        <desc>List of Blog posts fetched from an API, including pagination</desc>
        <technicalDescription>
        This project uses Next.js & React Query to fetch and cache a list of blog posts from an API.
        Server-side rendering is also used to hydrate the client to ensure a fast user experience.
        Ben also created a custom "usePagination" hook to display the posts in an organized fashion.
        </technicalDescription>
        <technologies>
            <li>Next.js</li>
            <li>React Query</li>
            <li>Next Redux Wrapper</li>
            <li>React Hook Form</li>
            <li>Custom Hooks</li>
        </technologies>
    </project>
</content>
</url>

<url>
<loc>https://joke-gpt-bcmendis.vercel.app/</loc>
<content>
    <project>
        <title>JokeGPT</title>
        <desc>Aquires an AI generated joke from OpenAI, through a user provided prompt</desc>
        <technicalDescription>
        This project uses Next.js & the OpenAI API to fetch an AI generated joke, by submitting a user prompt.
        e.g. "Tell me a joke about clowns."
        Initially created with React & Express and fetching a random predefined joke, Ben re-visited this project to rejuvenate it with new technologies.
        Also known as "B-3N's little brother".
        </technicalDescription>
        <technologies>
            <li>Next.js</li>
            <li>OpenAI API</li>
        </technologies>
        <languageModel>text-davinci-002</languageModel>
    </project>
</content>
</url>

<url>
<loc>https://login-page-next13-bcmendis.vercel.app/</loc>
<content>
    <project>
        <title>Login Page</title>
        <desc>A login form with instant user input feedback</desc>
        <technicalDescription>
        This project uses Next.js & React Hook forms to simulate a login form.
        It utilizes hooks and custom regex validations to provide clear & instant feedback to the user regarding any error states.
        Tailwind CSS was also used to provide an attractive & responsive UI design.
        This application was also contanerized using Docker.
        </technicalDescription>
        <technologies>
            <li>Next.js</li>
            <li>React Hook Form</li>
            <li>Tailwind CSS</li>
            <li>Docker</li>
        </technologies>
    </project>
</content>
</url>

<url>
<loc>https://benmendis.vercel.app/reviews</loc>
<desc>Review Page where visitors can leave a review on what they think of Ben's website. Sign-in required.</desc>
</url>

<url>
<loc>https://benmendis.vercel.app/contact</loc>
<desc>Contact Page that contains Ben's information and a contact form which visitors can fill to contact Ben.</desc>
</url>

<url>
<loc>https://www.linkedin.com/in/ben-mendis/</loc>
<desc>Ben's professional LinkedIn profile</desc>
</url>

<url>
<loc>https://github.com/bcmendis</loc>
<desc>Ben's Github profile</desc>
</url>
`;
