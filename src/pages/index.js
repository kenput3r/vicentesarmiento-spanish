import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{padding: `0 1.0875rem 1.45rem`}}>
      <div style={{maxWidth:960, margin:"0 auto"}}>
        <h2>About Vicente</h2>
        <p>In January of 2007, Vicente Sarmiento was appointed to the Santa Ana City Council to represent Ward 1. He was formally elected in November 2008, November 2012, November 2016 and is currently serving his third term.</p>
        <p>Mr. Sarmiento is currently the President of the Orange County Water District Board of Directors. He also is the Chairman of the Oversight Board of the Successor Agency to the former Redevelopment Agency for the City of Santa Ana. The Oversight Board has the fiduciary responsibility of handling the dissolution of the City’s former Redevelopment Agency. Mr. Sarmiento also chairs the City Council Committees for Development and Transportation, and Legislation; and he’s also a member of the Finance, Economic Development & Technology Committee.</p>
        <p>
        Mr. Sarmiento graduated from the University of California, Berkeley with a Bachelor of Arts in Economics. He received his Juris Doctorate from the University of California, Los Angeles School of Law. More recently, he attended the Kennedy School of Government at Harvard University and successfully completed the Certificate Program for Senior Executives in State and Local Government.
        </p>
        <p>
        Mr. Sarmiento is also a Board Member with the Joint Center for Political and Economic Studies based out of George Washington University. He was selected as one of the fourteen leaders from across the country to join the NewDEAL, a national network that is committed to highlighting innovative ideas from state and local elected leaders who are pro-growth progressives. 
        </p>
        <p>
        Councilmember Sarmiento was also a member of the Board of Directors with The National Association of Latino Elected and Appointed Officials (NALEO).
        </p>
      </div>
    </div>
    <Videos />
  </Layout>
)

export default IndexPage
