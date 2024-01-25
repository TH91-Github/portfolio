import { SvgGithub, SvgVelog } from "assets/styles/SvgPath";
import styled from "styled-components";


const slist = [
  {
      
    tit:"Github",
    desc:'portfolio github',
    url:"https://github.com/TH91-Github/portfolio",
  },
  {
    tit:"Velog",
    desc:'개인 기술 vlog',
    url:"https://velog.io/@th_velog/posts",
  },
];
function SnsList ({iconBg}) {
  const snsIconBg = iconBg ?? '#d9d9d9';

  return (
    <SnsWrap className="sns">
      <ul className="sns__lists">
        {
          slist.map((item,idx)=>{
            return  <li classNmae="sns__lists-item" key={idx}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="sns-icon">
                {item.tit === "Github" && <SvgGithub $fillColor={snsIconBg}/>}
                {item.tit === "Velog" && <SvgVelog $fillColor={snsIconBg}/>}
              </a>
            </li>
          })
        }
      </ul>
    </SnsWrap>
  )
}
export default SnsList;


const SnsWrap = styled.div`
  .sns{
    &__lists {
      display:flex;
      gap:10px;
    }
    &-icon{
      display:block;
      position:relative;
      width:20px;
      height:20px;
      cursor:pointer;
    }
  }
`;