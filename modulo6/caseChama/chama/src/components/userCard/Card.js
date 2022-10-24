import React from 'react'
import * as C from './styles'

const Card = (props) => {
  const user = props.users
  return (
    <C.Container>
      <C.AreaImg>
        {user?.avatar_url ? <a href={user.html_url}><C.ProfileImg src={user?.avatar_url} /></a> : <C.ProfileImg src='https://picsum.photos/300/300' />}
      </C.AreaImg>
      {user?.name ? <C.ProfileName>{user.name}</C.ProfileName> : <C.ProfileName>Example: Name</C.ProfileName>}
      <C.AreaText>
        <p>{user?.bio}</p>
      </C.AreaText>
      <C.ContainerFollow>
        <C.Follow>
          <p>Seguidores: </p>
          {user?.followers && <p>{user.followers}</p>}
        </C.Follow>
        <C.Follow>
          <p>Seguindo:</p>
          {user?.followers && <p>{user.following}</p>}
        </C.Follow>
      </C.ContainerFollow>
    </C.Container>
  )
}

export default Card