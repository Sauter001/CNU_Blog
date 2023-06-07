import styled from '@emotion/styled';

const Table = styled.table`
  width: 100%;
  border: 2px solid black;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid black;
  padding: 10px 5px;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 10px 5px;
`;

const Resume = () => {
  return (
    <div>
      <h1>Github</h1>
      <a href={'https://github.com/Sauter001'}>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg'} style={{ width: 30, marginRight: 10 }} />
        https://github.com/Sauter001
      </a>
      <h1>실전코딩 수강</h1>
      <p>2023-03 ~ 2023-06</p>
      <h2>Process</h2>
      <ol>
        <li>Github 사용법</li>
        <li>Springboot를 활용한 Backend</li>
        <li>Springboot를 활용한 Software Testing</li>
        <li>React를 활용한 웹사이트 개발</li>
      </ol>

      <h1>프로젝트</h1>
      <Table>
        <tbody>
          <tr>
            <Th>2023. 03. ~ 현재</Th>
            <Td>동아리 MOTION에서 모바일 앱 개발 진행 중</Td>
          </tr>
          <tr>
            <Th>
              2022. 12. 19 <br />~ 2022. 12. 30
            </Th>
            <Td>
              Flutter을 활용한 텃밭 관리 앱
              <ul>
                <li>10일 동계 실무 특강에서 진행</li>
                <li>주말 농장을 운영하거나 식물을 기르는 사람을 대상으로 더 효율적인 관리를 도우기 위해 개발함</li>
              </ul>
            </Td>
          </tr>
          <tr>
            <Th>2022. 04. ~ 2022. 06.</Th>
            <Td>
              MySQL을 활용한 칵테일 조합 추천 웹사이트
              <ul>
                <li>웹프로그래밍 텀프로젝트로 개발</li>
                <li>최대한 자신이 가진 재료를 이용해서 만들어 낼 수 있는 칵테일 추천하는 웹사이틑</li>
              </ul>
            </Td>
          </tr>
        </tbody>
      </Table>

      <h1>관심분야</h1>
      <h2>프론트엔드</h2>
      <Table>
        <tbody>
          <tr>
            <Th>React</Th>
            <Th>Vue</Th>
          </tr>
          <tr>
            <Td>
              <img src={'https://blog.kakaocdn.net/dn/dpwvVE/btrBqolp4WG/xU2kPsR8hJ0Rpx9B1LSoZ1/img.png'} style={{ width: '60%' }} />
            </Td>
            <Td>
              <img src={'https://vuejs.org/images/logo.png'} style={{ width: '100%' }} />
            </Td>
          </tr>
        </tbody>
      </Table>

      <h2>백엔드</h2>
      <Table>
        <tbody>
          <tr>
            <Th>Springboot</Th>
            <Th>Django</Th>
            <Th>Docker</Th>
          </tr>
          <tr>
            <Td>
              <img src={'https://godbell.kr/content/images/2022/11/20220607_001840_0001.png'} style={{ width: '100%' }} />
            </Td>
            <Td>
              <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/2560px-Django_logo.svg.png'}
                style={{ width: '100%' }}
              />
            </Td>
            <Td>
              <img
                src={'https://i.namu.wiki/i/ZQdXOSncY44_0z9oVbJoLVZ5XWNCSKy6FHlcyW5-6pG92JqDqJls9UYdlPmCzT0zgQJkKyo-e7hPHhF5Q8_3oQ.webp'}
                style={{ width: '100%' }}
              />
            </Td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Resume;
