/*------------------------------------------------------------------------------------------------------------------------------------------
 * Root.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import { DivisionBox } from 'lib/AmzPack/component';
import React from 'react';

interface RootProps {}

function Root(props: RootProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* ===== Props ===== */
  const {} = props;
  /* ===== State ===== */
  /* ===== Const ===== */
  /* ====== API ====== */

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <DivisionBox data-page="root" horizonAlign="center" verticalAlign="center">
      <em>User web page</em>
    </DivisionBox>
  );
}

namespace Root {}

export default Root;
