import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WatchNowService {
  getUrlForRoom(roomName: string): string {
    if (roomName === 'Web') {
      return 'https://teams.microsoft.com/l/meetup-join/19%3af67daacbf7334ceeb475264ccfb11307%40thread.tacv2/1634331199936?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%7d';
    }
    if (roomName === 'Cloud') {
      return 'https://teams.microsoft.com/l/meetup-join/19%3ac143969354c14ae7bf2405e46b005da4%40thread.tacv2/1634331493610?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%7d';
    }
    if (roomName === 'ML') {
      return 'https://teams.microsoft.com/l/meetup-join/19%3aafa303b7affb4ec29b64d176fab7c62d%40thread.tacv2/1634332267783?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%7d';
    }
    if (roomName === 'Other') {
      return 'https://teams.microsoft.com/l/meetup-join/19%3a5313999825c246c8979240774ce4a516%40thread.tacv2/1634332453280?context=%7b%22Tid%22%3a%22522429d4-f37f-4713-a7d9-58d6450b01b6%22%2c%22Oid%22%3a%22b821e4e9-0c4f-45bd-962a-71dac376dd03%22%7d';
    }
    return null;
  }

  constructor() {}
}
