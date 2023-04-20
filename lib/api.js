const API_URL = process.env.GQL_API_PATH
async function fetchAPI(query = '', { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' }
  
    if (process.env.GQL_JWT_TOKEN) {
      headers[
        'Authorization'
      ] = `Bearer ${process.env.GQL_JWT_TOKEN}`
    }
  
    // WPGraphQL Plugin must be enabled
    const res = await fetch(`${API_URL}`, {
      headers,
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    })
  
    const json = await res.json()
    if (json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
    return json.data
  }
  export async function getMenuItems() {
    const data = await fetchAPI(`
    query getMenuItems{
        menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}, first: 20) {
            edges {
              node {
                label
                path
                uri
                route {
                  code
                  link
                  name
                  iscomplete
                }
                childItems {
                  edges {
                    node {
                      label
                      uri
                      route {
                        code
                        link
                        name
                        iscomplete
                        
                      }
                    }
                  }
                }
                
              }
            }
          }
      }
    `)
    return data?.menuItems?.edges
  }
export async function getFootMenuItems() {
  const data = await fetchAPI(`
    query getFootMenuItems{
      menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
        edges {
          node {
            label
            url
            childItems {
              edges {
                node {
                  label
                  url
                  
                }
              }
            }
          }
        }
      }
      }
    `)
  return data?.menuItems?.edges
}


export async function getCommitteeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getCommitteeData {
    committeeBy(uri: "${tabKey}") {
      committee {
        fieldGroupName
        title
        desc
        members {
          name
          designation
          contactNo
          fieldGroupName
          
        }
        
      }
      slug
      uri
    }
  }
    `)
  return data?.committeeBy?.committee
}


export async function gettaxes(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query taxes {
    pageBy(uri: "/taxes-fees/") {
      slug
      title
      taxes_fees {
        fees {
          fieldGroupName
          feesInformation {
            entry
            for
            rate
          }
        }
        taxes {
          fieldGroupName
          taxInformation {
            entry
            taxes
            for
            rate
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.taxes_fees
}

export async function getpower(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query power {
    pageBy(uri: "/powers-duties-of-officers/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}

export async function getobligations(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query poweroblig {
    pageBy(uri: "/v-p-obligations/") {
      slug
      title
      obligations {
        fieldGroupName
        obligation {
          title
          desc
        }
      }
    }
  }
  `)
  return data?.pageBy?.obligations
}


export async function getCertificateData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getCertificateData{
      pageBy(uri: "${tabKey}") {
        certificates {
          applicationTab {
            desc
            fieldGroupName
            cardMenuBox {
              fieldGroupName
              manuName
              menuDesc
              menuButton {
                btnLink
                btnName
                fieldGroupName
              }
            }
          }
          faqTab {
            desc
            fieldGroupName
            ttitle
          }
          otherTabs {
            desc
            fieldGroupName
            tabName
          }
        }
        slug
        title
      }
      }
    `)
  return data?.pageBy?.certificates
}
export async function getRtiPageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getRtiPageData{
      pageBy(uri: "${tabKey}") {
        
    slug
    title
    rti {
      description
      button {
        link
        name
      }
      imageBlock {
        desc
        images {
          link
          sizes
          title
          uri
        }
      }
    }
      }
      }
    `)
  return data?.pageBy?.rti
}
export async function getAllSchemeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeData{
      allSchemes {
        nodes {
          title
          slug
          uri
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}
export async function getNewsLetterData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterData{
      newsLetters {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
          }
          
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}

export async function getPublicNoticeData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getPublicNoticeData{
      allNotices {
        nodes {
          uri
          title
          slug
          notices {
            date
            desc
            title
            downloadUrl
          }
        }
      }
    }
  `)
  return data?.allNotices?.nodes
}
export async function getVillageData(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getVillageData {
    pageBy(uri: "/village/") {
      slug
      title
      village {
        desc
        otherDesc
        imageUrl
        title
        image {
          uri
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}
export async function getSarpanchMsg(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSarpanchMsg {
    pageBy(uri: "/message-from-the-sarpanch/") {
      slug
      title
      sarpanchMsg {
        desc
        imageUrl
        image {
          sourceUrl
          uri
        }
      }
    }
  }
  `)
  return data?.pageBy?.sarpanchMsg
}
export async function getMediaGalleryData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getMediaGalleryData {
    mediaGalleries {
      edges {
        node {
          title
          slug
          gallery {
            content {
              categoryName {
                name
                slug
                taxonomyName
                termTaxonomyId
                uri
              }
              image {
                slug
                sourceUrl
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
  `)
  return data?.mediaGalleries?.edges
}
export async function getNoticeHomeData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getNoticeHome {
    allNotices(first: 5) {
      nodes {
        notices {
           title
          date
          downloadUrl
        }
      }
    }
  }
  `)
  return data?.allNotices?.nodes
}
export async function getSliderHomeData() {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getSliderHomeData {
    pageBy(pageId: 578) {
      homePage {
        slider {
          image {
            sourceUrl
          }
        }
      }
    }
  }
  `)
  return data?.pageBy?.homePage?.slider
}
export async function getAllSchemeDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getAllSchemeDataHome{
      allSchemes {
        nodes {
          title
          slug
          uri
          schemes {
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)
  return data?.allSchemes?.nodes
}
export async function getNewsLetterDataHome(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
    query getNewsLetterDataHome{
      newsLetters(first: 5) {
        nodes {
          slug
          title
          date
          newsLetter {
            date
            downloadUrl
            title
            desc
          }
        }
      }
    }
  `)
  return data?.newsLetters?.nodes
}
export async function getHTDataTest(tabKey) {
  //console.log('tabKey-applo',tabKey)
  const data = await fetchAPI(`
  query getHTDataTest {
    pageBy(uri: "/housetax-test/") {
      slug
      title
      village {
        desc
        otherDesc
        imageUrl
        title
        image {
          uri
          sourceUrl
        }
      }
    }
  }
  `)
  return data?.pageBy?.village
}