import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import HOOCardImage from '@n8d/htwoo-react/HOOCardImage';
import HOOCardLocation from '@n8d/htwoo-react/HOOCardLocation';
import HOOCardTitle from '@n8d/htwoo-react/HOOCardTitle';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className="hoo-doccard">
          <HOOCardImage imageSource="https://placekitten.com/320/180"/>
          <HOOCardLocation location="https://hereismysharepoint.sharepoint.com/sites/mysitenameislong"/>
          <HOOCardTitle title="Sample Title"/>     
        </div>
      </div>
    );
  }
}
