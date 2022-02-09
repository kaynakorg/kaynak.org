export const nuxtServerInit = (vuexContext, context)=>{
    vuexContext.commit("setDocs", [
     
    ])

    setPosts = (vuexContext, docs)=>{
       vuexContext.commit("setDocs", docs)
    }
  },
