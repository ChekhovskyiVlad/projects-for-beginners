import React from 'react';

export const Success = ({ count, window }) => {
  return (
    <div class="success-block">
      <img src="/assets/succes.png" alt="Success" />
      <h3>Successfully!</h3>
      <p>An invitation has been sent to all {count} users.</p>
      <a href='/users'>
      <button className="send-invite-btn">Back</button>
      </a>
    </div>
  );
};